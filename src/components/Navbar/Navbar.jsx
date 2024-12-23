import React, { useRef, useState } from "react";
import './Navbar.css'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('hero');
    const menuRef = useRef(null); // Initialize the ref to null

    const openMenu = () => {
        if (menuRef.current) { // Check if menuRef is defined
            menuRef.current.style.right = "0";
        }
    };

    const closeMenu = () => {
        if (menuRef.current) { // Check if menuRef is defined
            menuRef.current.style.right = "-350px";
        }
    };
    const scrollToSection = (id) => {
        setActiveLink(id);
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
        <>
        <div className="navbar">
           <h1>Developer</h1>
           <div className="nav-mob-open" onClick={openMenu}>
              <i class="fa-solid fa-bars"></i>
           </div>
           <ul className="nav-menu" ref={menuRef}>
            <div className="nav-mob-close" onClick={closeMenu}>
            <i class="fa fa-close"></i>
            </div>
            <li
            className={activeLink === 'hero' ? 'active' : ''}
            onClick={() => scrollToSection('hero')}
          >
            Home
          </li>
          <li
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            About Me
          </li>
          <li
            className={activeLink === 'services' ? 'active' : ''}
            onClick={() => scrollToSection('services')}
          >
            Services
          </li>
          <li
            className={activeLink === 'mywork' ? 'active' : ''}
            onClick={() => scrollToSection('mywork')}
          >
            Portfolio
          </li>
          <li
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </li>
           </ul>
           <div className="nav-connect">
            Connect With Me
           </div>
        </div>
        </>
    )
}

export default Navbar;