import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import mentalHealthImage16 from "./images/16.jpg";
import axios from "axios";

const Profile = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        address: '',
        contact: ''
    })

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }    

    const handleSubmit =(event) =>{
        event.preventDefault();
        // You should validate your form before sending the request
        axios.post('http://localhost:8081/profile', values)
            .then(res => {
                // Handle success response
                console.log(res.data);
            })
            .catch(err => {
                // Handle error response
                console.error(err);
            });
    }

    return (
        <div>
            <div>
                <ul className="nav-ul">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/sharethoughts">Share Thoughts</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/therapysession">Therapy Session</Link></li>
                    <li><Link to="/ourteam">Our Team</Link></li>
                    <li><Link to="/">Log Out</Link></li>
                </ul>
            </div>
            <div>
                <img src={mentalHealthImage16} alt="Image16" className="signup-image2" />
                <div className="signup-container2">
                    <div>
                        <h2>Create Your Profile</h2>
                        <form action="" onSubmit={handleSubmit}>
                            <br></br>
                            <br></br>
                            <div className="form-group">
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input type="text" placeholder="Enter Name" name="name"
                            onChange={handleInput} className="form-control rounded-0"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" placeholder="Enter Mail" name="email"
                            onChange={handleInput} className="form-control rounded-0"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="address"><strong>Address</strong></label>
                            <input type="text" placeholder="Enter Address" name="address"
                            onChange={handleInput} className="form-control rounded-0"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="contact"><strong>Contact</strong></label>
                            <input type="tel" placeholder="Enter Contact" name="contact"
                            onChange={handleInput} className="form-control rounded-0"/>
                            </div>
                            <br></br>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer">
                <br></br>
                <br></br>
                <h1>Welcome To Mental Health Consultancy</h1>
                <p>Contact us to schedule an appointment or inquire about our services.</p>
                <p>Phone: 123-456-7890 | Email: info@mentalhealthconsultancy.com</p>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};

export default Profile;