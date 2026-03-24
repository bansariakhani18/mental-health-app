import React, { useState } from "react";
import "./ShareThoughts.css";
import { Link } from "react-router-dom";
import mentalHealthImage11 from "./images/8.jpg";
import mentalHealthImage12 from "./images/9.jpg";
import mentalHealthImage13 from "./images/10.jpg";
import mentalHealthImage14 from "./images/11.jpg";
import mentalHealthImage15 from "./images/12.jpg";
import mentalHealthImage16 from "./images/13.jpg";

const ShareThoughts = () => {
    const [name1, setName1] = useState("");
    const [comment1, setComment1] = useState("");
    const [name2, setName2] = useState("");
    const [comment2, setComment2] = useState("");
    const [name3, setName3] = useState("");
    const [comment3, setComment3] = useState("");
    const [name4, setName4] = useState("");
    const [comment4, setComment4] = useState("");
    const [name5, setName5] = useState("");
    const [comment5, setComment5] = useState("");
    const [name6, setName6] = useState("");
    const [comment6, setComment6] = useState("");

    const handleSubmit = async (event, name, comment) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8081/sharethoughts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, comment }),
            });
            if (response.ok) {
                console.log("Comment stored successfully");
            } else {
                console.error("Error storing comment");
            }
        } catch (error) {
            console.error("Error:", error);
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className="contentstyle"> ✨ Interact Without Any Fear And Make Your Self Stressfree!! ✨ </h1>
                </ul>
                </div>
                <br></br>
                <br></br>
                <div className="image-container11">
                    <img src={mentalHealthImage11} alt="Mental Health" />
                </div>
                <div className="text-container">
                <form onSubmit={(event) => handleSubmit(event, name1, comment1)}>
                    <label htmlFor="" className="formcontent">Yoga Is The Best Work To Reduce The Stress..</label>
                    <br></br>
                    <input type="text" id="name1" name="name1" className="formcontent" placeholder="Name.." value={name1} onChange={(event) => setName1(event.target.value)} required />
                    <input type="text" id="comment1" name="comment1" className="formcontent" placeholder="Comment.." value={comment1} onChange={(event) => setComment1(event.target.value)} required />
                    <br></br>
                    <button type="submit" className="buttonstyle">Submit</button>
                    <br></br>
                    <button className="buttonstyle">👍</button>
                    <br></br>
                    <button className="buttonstyle">👎</button>
                </form>
                </div>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <div className="image-container12">
                    <img src={mentalHealthImage12} alt="Mental Health" />
                </div>
                <div className="text-container">
                <form onSubmit={(event) => handleSubmit(event, name2, comment2)}>
                    <label htmlFor="" className="formcontent">Live Happy..Fit With Gym Workouts..</label>
                    <br></br>
                    <input type="text" id="name2" name="name2" className="formcontent" placeholder="Name.." value={name2} onChange={(event) => setName2(event.target.value)} required />
                    <input type="text" id="comment2" name="comment2" className="formcontent" placeholder="Comment.." value={comment2} onChange={(event) => setComment2(event.target.value)} required />
                    <br></br>
                    <button type="submit" className="buttonstyle">Submit</button>
                    <br></br>
                    <button className="buttonstyle">👍</button>
                    <br></br>
                    <button className="buttonstyle">👎</button>
                </form>
            </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="image-container11">
                    <img src={mentalHealthImage13} alt="Mental Health" />
                </div>
                <div className="text-container">
                <form onSubmit={(event) => handleSubmit(event, name3, comment3)}>
                    <label htmlFor="" className="formcontent">Healthy Food Make Your Body Comfertable..</label>
                    <br></br>
                    <input type="text" id="name3" name="name3" className="formcontent" placeholder="Name.." value={name3} onChange={(event) => setName3(event.target.value)} required />
                    <input type="text" id="comment3" name="comment3" className="formcontent" placeholder="Comment.." value={comment3} onChange={(event) => setComment3(event.target.value)} required />
                    <br></br>
                    <button type="submit" className="buttonstyle">Submit</button>
                    <br></br>
                    <button className="buttonstyle">👍</button>
                    <br></br>
                    <button className="buttonstyle">👎</button>
                </form>
            </div>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <div className="image-container12">
                    <img src={mentalHealthImage14} alt="Mental Health" />
                </div>
                <div className="text-container">
                <form onSubmit={(event) => handleSubmit(event, name4, comment4)}>
                    <label htmlFor="" className="formcontent">Pray Is a Way To Talk With God..</label>
                    <br></br>
                    <input type="text" id="name4" name="name4" className="formcontent" placeholder="Name.." value={name4} onChange={(event) => setName4(event.target.value)} required />
                    <input type="text" id="comment4" name="comment4" className="formcontent" placeholder="Comment.." value={comment4} onChange={(event) => setComment4(event.target.value)} required />
                    <br></br>
                    <button type="submit" className="buttonstyle">Submit</button>
                    <br></br>
                    <button className="buttonstyle">👍</button>
                    <br></br>
                    <button className="buttonstyle">👎</button>
                </form>
            </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="image-container11">
                    <img src={mentalHealthImage15} alt="Mental Health" />
                </div>
                <div className="text-container">
                <form onSubmit={(event) => handleSubmit(event, name5, comment5)}>
                    <label htmlFor="" className="formcontent">If You Have Nothing To Work Do Sleep Work..</label>
                    <br></br>
                    <input type="text" id="name5" name="name5" className="formcontent" placeholder="Name.." value={name5} onChange={(event) => setName5(event.target.value)} required />
                    <input type="text" id="comment5" name="comment5" className="formcontent" placeholder="Comment.." value={comment5} onChange={(event) => setComment5(event.target.value)} required />
                    <br></br>
                    <button type="submit" className="buttonstyle">Submit</button>
                    <br></br>
                    <button className="buttonstyle">👍</button>
                    <br></br>
                    <button className="buttonstyle">👎</button>
                </form>
            </div>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <div className="image-container12">
                    <img src={mentalHealthImage16} alt="Mental Health" />
                </div>
                <div className="text-container">
                <form onSubmit={(event) => handleSubmit(event, name6, comment6)}>
                    <label htmlFor="" className="formcontent">Being Socialize Is Great Mood-Booster..</label>
                    <br></br>
                    <input type="text" id="name6" name="name6" className="formcontent" placeholder="Name.." value={name6} onChange={(event) => setName6(event.target.value)} required />
                    <input type="text" id="comment6" name="comment6" className="formcontent" placeholder="Comment.." value={comment6} onChange={(event) => setComment6(event.target.value)} required />
                    <br></br>
                    <button type="submit" className="buttonstyle">Submit</button>
                    <br></br>
                    <button className="buttonstyle">👍</button>
                    <br></br>
                    <button className="buttonstyle">👎</button>
                </form>
            </div>
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

export default ShareThoughts;