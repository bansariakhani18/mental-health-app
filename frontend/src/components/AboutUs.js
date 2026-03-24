import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import mentalHealthImage4 from "./images/6.jpg";
import mentalHealthImage5 from "./images/7.PNG";

const AboutUs = () => {
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
                <div className="image-container4">
                    <img src={mentalHealthImage4} alt="Mental Health" />
                </div>
                <div>
                    <h1 className="h1space">
                        <b><u>About Our Mission</u></b>
                    </h1>
                    <p className="pstyle">
                        we are dedicated to supporting individuals on their journey towards mental well-being. Our platform is more than just an app; it's a compassionate community, a trusted resource, and a guide to a healthier mind.
                        Our mission is simple: to break down barriers to mental health care and empower individuals to prioritize their well-being. We believe that everyone deserves access to high-quality support and guidance on their mental health journey.
                    </p>
                </div>
            </section>
                <section className="services-section">
                    <h2 className="pstyle6"><u>What sets us apart</u></h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="image-container5">
                    <img src={mentalHealthImage5} alt="Mental Health" />
                    </div>
                    <br></br>
                    <ul>
                        <li className="extraspace"><b>Expert Guidance:</b>Our team consists of licensed mental health professionals who are passionate about providing personalized support and evidence-based guidance.</li>
                        <br></br>
                        <li className="extraspace"><b>Accessible Support:</b> We understand that seeking help can be daunting. That's why we've created a platform that's accessible anytime, anywhere, allowing you to connect with support whenever you need it.</li>
                        <br></br>
                        <li className="extraspace"><b>Community Connection:</b> Finding support from others who understand can be incredibly healing. Through our community features, you can connect with peers, share experiences, and offer support in a safe and supportive environment.</li>
                        <br></br>
                        <li className="extraspace"><b>Holistic Approach:</b> We believe in the importance of addressing mental health from a holistic perspective, considering factors lifestyle, relationships, and self-care habits.</li>
                    </ul>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>
                        <b><u>Our Promise to You</u></b>
                    </h1>
                    <br></br>
                    <br></br>
                    <p className="pstyle">
                    your well-being is our top priority. Whether you're seeking support for anxiety, depression, stress, or simply looking to improve your overall mental wellness, we're here to guide you every step of the way. Your journey to a healthier mind starts here.
                    Take the first step towards a brighter, healthier future by joining the community today. Together, we can break down barriers, reduce stigma, and prioritize mental health for all.
                    </p>
                    <br></br>
                </section>
                <section className="pstyle3">
                    <hr></hr>
                    <br></br>
                    <p>Take the first step towards a brighter, healthier future by joining the community today. Together, we can break down barriers, reduce stigma, and prioritize mental health for all.</p>
                    <br></br>
                    <br></br>
                </section>
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

export default AboutUs;