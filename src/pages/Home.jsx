import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import MyWork from "../components/MyWork/MyWork";
import Contact from "../components/Contact/Contact";


const Home = () => {
    return(
        <>
         <div id='hero'>
      <Hero />
      </div>
      <div id='about'>
      <About />
      </div>
      <div id='services'>
      <Services/>
      </div>
      <div id="mywork">
      <MyWork/>
      </div>
      <div id="contact">
      <Contact/>
      </div>
        </>
    )
}
export default Home;