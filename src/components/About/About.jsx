import React from "react";
import './About.css'
import Image from '../../assests/new.webp'

const About = () => {
    return(
        <>
        <div className="about">
            <div className="about-title">
                  <h1>About Me</h1>
                  <img src=""/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={Image}/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am Experienced developer with over Frontend and Backend Role.</p>
                        <p>I am From Indore having 5+ Years in Frontend Development</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <div className="skill">
                            <p>HTML & CSS</p><hr style={{width: '45%',marginBottom: '10px'}}/>
                            </div>
                            <div className="skill">
                            <p>Javascript</p><hr style={{width: '40%',marginBottom: '10px'}}/>
                            </div>
                            <div className="skill">
                            <p>React Js</p><hr style={{width: '43%',marginBottom: '10px'}}/>
                            </div>
                            <div className="skill">
                            <p>Next Js</p><hr style={{width: '40%',marginBottom: '10px'}}/>
                            </div>
                            <div className="skill">
                            <p>Typescript</p><hr style={{width: '41%',marginBottom: '10px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>Years of Experienced</p>
                    </div>
                    <div className="about-achievement">
                        <h1>20+</h1>
                        <p>Project Completed</p>
                    </div>
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>Happy Clients</p>
                    </div>
                </div>
        </div>
        </>
    )
}
export default About;