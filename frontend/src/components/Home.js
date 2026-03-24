import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import mentalHealthImage from "./images/1.png";
import mentalHealthImage2 from "./images/2.png";
import mentalHealthImage3 from "./images/3.jpg";
import mentalHealthImage14 from "./images/17.png";

const Home = () => {
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
                    <img src={mentalHealthImage14} alt="Mental Health" />
                </div>
            <br></br>
                <div className="image-container">
                    <img src={mentalHealthImage} alt="Mental Health" />
                </div>
                <div>
                    <h1 className="h1space">
                        <b><u>Welcome To Mental Health consultancy</u></b>
                    </h1>
                    <p className="pstyle">
                    We are dedicated to providing support and guidance for individuals struggling with mental health challenges. this app is specially for those 
                    people who suffering mental health problems in their life and can't live happily due to several reasons.<br></br><br></br> 
                    Our team of professionals is here to assist you on your journey towards better mental well-being.
                    We know that in our cuurent life we are going through so many problem which is the main couse of our stress
                    but we are only here for you to help you to gain freedom and enjoy the life happily without taking stress any more!!
                    </p>
                </div>
            </section>
                <section className="services-section">
                    <p className="pstyle">
                        Our approach to mental health focuses on holistic well-being, addressing emotional, psychological, and social aspects. We believe in creating a safe and supportive environment where you can explore your thoughts and feelings without judgment.
                        Whether you're dealing with anxiety, depression, trauma, or any other mental health issue, we're here to help you navigate through challenges and develop coping strategies to improve your quality of life.
                    </p>
                    <br></br>
                    <br></br>
                    <h2 className="pstyle2"><u>Our Services</u></h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="image-container2">
                    <img src={mentalHealthImage2} alt="Mental Health" />
                    </div>
                    <br></br>
                    <ul>
                        <li>Individual Counseling</li>
                        <li>Mindfulness and Relaxation Techniques</li>
                        <li>Online Support Groups</li>
                        <li>Art and Expressive Therapy</li>
                        <li>Cognitive Behavioral Therapy (CBT)</li>
                        <li>Stress Management Workshops</li>
                        <li>Family Therapy Sessions</li>
                    </ul>
                </section>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <h1 className="pstyle4"><u><b>Why Choose Us?</b></u></h1>
                    <br></br>
                    <br></br>
                <section className="pstyle3">    
                <div className="image-container3">
                    <img src={mentalHealthImage3} alt="Mental Health" />
                </div>
                <br></br>
                        <p className="pstyle3">• Experienced and compassionate therapists</p>
                        <p className="pstyle3">• Personalized treatment plans tailored to your needs</p>
                        <p className="pstyle3">• Safe and confidential environment for therapy sessions</p>
                        <p className="pstyle3">• Flexible appointment scheduling options</p>
                        <p className="pstyle3">• Commitment to ongoing support and follow-up</p>
                </section>
                <section className="pstyle3">
                    <br></br>
                    <h2><u>Contact Us</u></h2>
                    <p>
                        Ready to take the first step towards better mental health? Contact us to schedule an appointment or inquire about our services.
                    </p>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: info@mentalhealthconsultancy.com</p>
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

export default Home;