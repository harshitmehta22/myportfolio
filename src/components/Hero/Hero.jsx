import React from "react";
import './Hero.css'

const Hero = () => {
    return(
        <>
        <div className="hero">
            <img src=""/>
            <h1><span>I'm Harshit Mehta</span>, Frontend developer based in India.</h1>
            <p>With over 5+ years of expertise in crafting user-friendly and responsive web applications, I specialize in HTML, CSS, JavaScript, React.js, and modern frontend frameworks. My goal is to deliver high-performing, visually appealing, and scalable solutions tailored to meet your business needs.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect with Me
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;