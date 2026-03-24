import React, { useState } from "react";
import "./OurTeam.css";
import { Link } from "react-router-dom";
import axios from "axios";
import mentalHealthImage21 from "./images/21.PNG";
import mentalHealthImage22 from "./images/22.PNG";
import mentalHealthImage23 from "./images/23.PNG";
import mentalHealthImage24 from "./images/24.PNG";
import mentalHealthImage25 from "./images/25.PNG";
import mentalHealthImage26 from "./images/26.PNG";

const OurTeam = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        query: ''
    });

    const [selectedPackage, setSelectedPackage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to the backend for storing
            await axios.post('http://localhost:8081/ourteam/action', { 
                action: 'storeData',
                ...formData,
                selectedPackage
            });
            // Clear form data after submission
            setFormData({ name: '', contact: '', query: '' });
            setSelectedPackage('');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handlePackageSelection = async (packageType) => {
        setSelectedPackage(packageType);
        try {
            // Handle package selection button click
            await axios.post('http://localhost:8081/ourteam/action', { 
                action: 'updatePackage',
                packageType
            });
        } catch (error) {
            console.error('Error updating package:', error);
        }
    };

    const handlePayment = async () => {
        try {
            // Handle payment button click
            await axios.post('http://localhost:8081/ourteam/action', { 
                action: 'updatePayment',
                payment: 1 
            });
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

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
            <br />
            <h1><u>Our Top Psychologists and Therapists</u></h1>
            <br /><br /><br /><br />
            <div className="image-container11">
                <img src={mentalHealthImage21} alt="Mental Health" />
            </div>
                <div className="text-container">
                    <label htmlFor="" className="formcontent21"><i>Dr.Aria</i><br /><i>Psychologist and CBT& REBT practitioner.</i></label>
                    <br /><br />
                    <p className="formcontent21">She loves all kinds of arts, has a background of fine arts, always interested
                        in literature, writes poems from time to time. High functioning introvert,
                        have passion for reading books and psychology. Her approach as a psychologist
                        is direct and binding. She thinks behaviour neither decide the destiny nor the
                        character, you always know who you are. She believes in positive regard and
                        humane nature of people and incorporates this in her counselling process.
                        When we talk about our feelings, they become less overwhelming, less upsetting
                        and less scary, take a step always to support yourself.</p>
                </div>
                <hr></hr>
                <br></br>
                <br></br>
                <div className="image-container11">
                    <img src={mentalHealthImage22} alt="Mental Health" />
                </div>
                <div className="text-container">
                        <br></br>
                        <label htmlFor="" className="formcontent21"><i>Dr.John</i><br></br><i>Therapy approach: CBT, DBT, SFBT, Hypnotherapy</i></label>
                            <br></br>
                            <br></br>
                            <p className="formcontent21">He has attained his experience at various esteemed 
                            institutions of mental health in India such as NIMHANS-Bangalore, IBHAS-Delhi.
                              As a Clinical Psychologist his expertise includes a wide range of mental 
                            health conditions like Anxiety Disorders,Mood Disorders, Sexual dysfunctions,
                             Mens Mental Health,OCD, Addiction, Family Counselling and other mental health
                              issues.</p>
                </div>
                <hr></hr>
                <br></br>
                <br></br>
                <div className="image-container11">
                    <img src={mentalHealthImage23} alt="Mental Health" />
                </div>
                <div className="text-container">
                        <label htmlFor="" className="formcontent21"><i>Dr.Erina</i><br></br><i>Psychologist and CBT& REBT practitioner.</i></label>
                            <br></br>
                            <br></br>
                            <p className="formcontent21">I am a counseling psychologist and family therapist.
                             I have 5 years of clinical and therapeutic experience. I specialise in the 
                             treatment of children, adolescents, and adults experiencing a wide range of 
                             emotional and behavioral issues/difficulties. I have a sub-speciality in working
                              with Adolescents and Adults dealing with trauma related difficulties,and/or 
                              emotional issues.</p>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <div className="image-container11">
                    <img src={mentalHealthImage24} alt="Mental Health" />
                </div>
                <div className="text-container">
                        <br></br>
                        <label htmlFor="" className="formcontent21"><i>Dr.Lisa</i><br></br><i>Areas of expertise: Anxiety, family dynamics, loneliness</i></label>
                            <br></br>
                            <br></br>
                            <p className="formcontent21">Lisa  is a practicing psychologist and deeply cares about the family systems
                             and inter-personal relationships. She believes  healing and growth happens when 
                             we are in a supportive environment.Besides spending her time in clinical work,
                              she's trying to build her balcony garden and grooving to fun music from varied
                               cultures.</p>
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="image-container11">
                    <img src={mentalHealthImage25} alt="Mental Health" />
                </div>
                <div className="text-container">
                        <br></br>
                        <label htmlFor="" className="formcontent21"><i>Dr.Rechard</i><br></br><i>Psychologist and CBT& REBT practitioner.</i></label>
                            <br></br>
                            <br></br>
                            <p className="formcontent21">He has attained his experience at various esteemed 
                            institutions of mental health in India such as NIMHANS-Bangalore, IBHAS-Delhi.
                             As a Clinical Psychologist his expertise includes a wide range of mental 
                            health conditions like Anxiety Disorders,Mood Disorders, Sexual dysfunctions,
                             Mens Mental Health,OCD, Addiction, Family Counselling and other mental health
                              issues.</p>
                </div>
                <hr></hr>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <div className="image-container11">
                    <img src={mentalHealthImage26} alt="Mental Health" />
                </div>
                <div className="text-container">
                        <br></br>
                        <label htmlFor="" className="formcontent21"><i>Dr.Max</i><br></br><i>Psychologist and CBT& REBT practitioner.</i></label>
                            <br></br>
                            <br></br>
                            <p className="formcontent21">He has attained his experience at various esteemed 
                            institutions of mental health in India such as NIMHANS-Bangalore, IBHAS-Delhi.
                              As a Clinical Psychologist his expertise includes a wide range of mental 
                            health conditions like Anxiety Disorders,Mood Disorders, Sexual dysfunctions,
                             Mens Mental Health,OCD, Addiction, Family Counselling and other mental health
                              issues.</p>
                    </div>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <div className="text-container">
                        <form onSubmit={handleSubmit}>
                             <br /><br />
                            <div className="floatcenter">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="formcontent21" placeholder="Name.." required /><br></br>
                            <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="formcontent21" placeholder="Contact.." required /><br></br>
                            <input type="text" name="query" value={formData.query} onChange={handleChange} className="formcontent21" placeholder="Ask Anything.." required />
                            </div>
                            <br /><br />
                            <button type="submit" className="buttonstyle">Submit</button>
                            <button type="button" className="buttonstyle" onClick={() => handlePackageSelection('prime')}>Prime Package</button>
                            <button type="button" className="buttonstyle" onClick={() => handlePackageSelection('essential')}>Essential Package</button>
                            <button type="button" className="buttonstyle" onClick={handlePayment}>Payment</button>
                        </form>
                    </div>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <br></br>
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

export default OurTeam;