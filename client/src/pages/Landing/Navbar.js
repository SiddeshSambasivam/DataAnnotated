import React from 'react';
//import "./style.css";
import './navbar.css';
import "../../assets/LineIcons.css";

function Navbar() {
    return (
        <nav class="nav-menu">
            <ul>
                <li><a href="#hero"><i class="lni lni-home"></i> <span>Home</span></a></li>
                <li><a href="#dashboard"><i class="lni lni-dashboard"></i> <span>Dashboard</span></a></li>
                <li><a href="#services"><i class="lni lni-database"></i> <span>Services</span></a></li>
                <li><a href="#contact"><i class="lni lni-envelope"></i> <span>Contact Us</span></a></li>

            </ul>

        </nav>
       
    );
}

export default Navbar;