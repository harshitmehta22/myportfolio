import React from "react";
import './Contact.css'
const Contact = () => {
    return(
        <>
<div className="contact">
    <div className="contact-title">
        <h1>Get In Touch</h1>
    </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I am currently available let connect and disccuss</p>
            <div className="contact-details">
                <div className="contact-detail">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <p>harshitmehta155@gmail.com</p>
                </div>
                <div className="contact-detail">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <p>+91 9340789782</p>
                </div>
                <div className="contact-detail">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <p>335,Tilak nagar, indore</p>
                </div>
            </div>
        </div>
        <div className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label>Your Email</label>
            <input type="text" placeholder="Enter your email" name="email"/>
            <label>Write your message here</label>
            <textarea name="message" placeholder="Enter your message" rows="8"/>
            <button type="submit" className="contact-submit">Submit</button>
        </div>
    </div>
</div>
        </>
    )
}

export default Contact;