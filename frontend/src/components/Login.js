// Login.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from 'axios';
import "./Login.css";

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success") {
                    navigate('/home');
                }
                else {
                    alert("No Record Existed");
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className='container d-flex justify-content-end align-items-center bg-plum'>
            <div className="bg-green p-3 rounded w-40">
                <h2 className="mb-4">Log-In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Mail" name="email"
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.email && <span className="text-danger"> {errors.email} </span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name="password"
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.password && <span className="text-danger"> {errors.password} </span>}
                    </div>
                    <button type='submit' className="btn btn-success w-100 button-3d">Login</button>
                    <br></br>
                    <br></br>
                    <p><strong>You agree to our terms and policies</strong></p>
                    <Link to='/signup' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
                </form>
            </div>   
        </div>
    );
};

export default Login;