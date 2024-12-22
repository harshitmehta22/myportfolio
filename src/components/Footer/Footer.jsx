import React from "react";
import './Footer.css'

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src=""/>
                    <p>I am a Frontend developer from, USA with 10 years of experience in top companies.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src="" alt=""/>
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    @2024 harshit mehta. All Rights
                </p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;