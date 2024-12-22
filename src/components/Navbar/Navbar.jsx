import React, { useRef } from "react";
import './Navbar.css'

const Navbar = () => {
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
    return(
        <>
        <div className="navbar">
           {/* <img src=""/> */}
           <h1>Logo</h1>
           <div className="nav-mob-open" onClick={openMenu}>
              <i class="fa-solid fa-bars"></i>
           </div>
           <ul className="nav-menu" ref={menuRef}>
            <div className="nav-mob-close" onClick={closeMenu}>
            <i class="fa fa-close"></i>
            </div>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
           </ul>
           <div className="nav-connect">
            Connect With Me
           </div>
        </div>
        </>
    )
}

export default Navbar;