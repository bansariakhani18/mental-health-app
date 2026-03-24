const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to the database.');
});

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO signup (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, password];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
        console.log('New user added successfully.');
        return res.status(200).json({ success: true, message: 'User added successfully.' });
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM signup WHERE email = ? AND password = ?";
    db.query(sql, [ req.body.email,req.body.password ], (err,data) => {
        if (err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        }
        else {
            return res.json("Fail");
        }
    });
});

app.post('/ourteam/action', (req, res) => {
    const { action, name, contact, query, selectedPackage, payment, packageType } = req.body;

    switch (action) {
        case 'storeData':
            const insertSql = "INSERT INTO ourteam (name, contact, query, selectedPackage) VALUES (?, ?, ?, ?)";
            const insertValues = [name, contact, query, selectedPackage];
            db.query(insertSql, insertValues, (insertErr, insertResult) => {
                if (insertErr) {
                    console.error('Error executing query: ', insertErr);
                    return res.status(500).json({ error: 'An error occurred while processing your request.' });
                }
                console.log('Data stored successfully.');
                return res.status(200).json({ success: true, message: 'Data stored successfully.' });
            });
            break;

        case 'updatePayment':
            const paymentSql = "UPDATE ourteam SET payment = ? WHERE id = (SELECT MAX(id) FROM ourteam)";
            db.query(paymentSql, payment, (paymentErr, paymentResult) => {
                if (paymentErr) {
                    console.error('Error executing query: ', paymentErr);
                    return res.status(500).json({ error: 'An error occurred while processing your request.' });
                }
                console.log('Payment status updated successfully.');
                return res.status(200).json({ success: true, message: 'Payment status updated successfully.' });
            });
            break;

        case 'updatePackage':
            const packageSql = "UPDATE ourteam SET " + packageType + " = 1 WHERE id = (SELECT MAX(id) FROM ourteam)";
            db.query(packageSql, (packageErr, packageResult) => {
                if (packageErr) {
                    console.error('Error executing query: ', packageErr);
                    return res.status(500).json({ error: 'An error occurred while processing your request.' });
                }
                console.log('Package type updated successfully.');
                return res.status(200).json({ success: true, message: 'Package type updated successfully.' });
            });
            break;

        default:
            return res.status(400).json({ error: 'Invalid action.' });
    }
});

app.post('/sharethoughts', (req, res) => {
    const { name, comment } = req.body;
    const sql = "INSERT INTO comments (name, comment) VALUES (?, ?)";
    const values = [name, comment];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
        console.log('Comment added successfully.');
        return res.status(200).json({ success: true, message: 'Comment added successfully.' });
    });
});

app.post('/profile', (req, res) => {
    const { name, email, address, contact } = req.body;
    const sql = "INSERT INTO profiles (name, email, address, contact) VALUES (?, ?, ?, ?)";
    const values = [name, email, address, contact];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
        console.log('User profile added successfully.');
        return res.status(200).json({ success: true, message: 'User profile added successfully.' });
    });
});

app.listen(8081, ()=>{
    console.log("Working..")
})