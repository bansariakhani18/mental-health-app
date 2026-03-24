import React from "react";
import "./TherapySession.css";
import { Link } from "react-router-dom";
import mentalHealthImage18 from "./images/18.png";
import mentalHealthImage19 from "./images/19.png";
import mentalHealthImage20 from "./images/20.png";

const TherapySession = () => {
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
        <div className="home-container">
            <main>
            <section className="intro-section">
                <div className="image-container14">
                    <img src={mentalHealthImage18} alt="Mental Health" />
                </div>
            <br></br>
                <div>
                    <h1 className="h1space">
                        <br></br>
                        <b><u>Connect With The Best Therapist..!!</u></b>
                    </h1>
                    <br></br>
                    <h2>Best Online Counseling And Therapy Sessions Are Here.</h2>
                </div>
            </section>
                <section className="services-section">
                    <p className="pstyle">
                    Connect with top psychiatrist from AIIMS & NIMHANS online at your comfortable space at your convenient time. Get the best Psychiatric treatment possible online with Manastha Prime Service.
                    We assign the best psychologist and counsellor as per your case. We Choose the best for you.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2 className="pstyle19"><u>Our Prime Packages</u></h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="image-container19">
                    <img src={mentalHealthImage19} alt="Mental Health" />
                    </div>
                    <br></br>
                    <ul>
                        <li>Head Psychiatrist & Psychologist</li>
                        <li>Get Head Psychologist and Senior Psychiatrist from AIIMS & NIMHANS Within One Hour</li>
                        <li>Longer 60 minutes Session</li>
                        <li>Flexible Session Slots</li>
                        <li>Get a Certified Medical Doctor and a Psychologist Together</li>
                        <li>Medical + Therapy Approach</li>
                    </ul>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </section>
                    <h1 className="pstyle20"><u>ESSENTIAL PACKAGES</u></h1>
                    <br></br>
                    <br></br>
                <section className="pstyle3">    
                <div className="image-container3">
                    <img src={mentalHealthImage20} alt="Mental Health" />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <ul>
                        <li className="pstyle3">Certified Psychologist</li>
                        <li>Get Head Psychologist and Senior Psychiatrist from AIIMS & NIMHANS Within One Hour</li>
                        <li>Get Certified Psychologist in 36-48 hours</li>
                        <li>Comfortable 40 minutes Session</li>
                        <li>Most Affordable Package</li>
                    </ul>
                </section>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </main>
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

export default TherapySession;