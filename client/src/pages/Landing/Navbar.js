import React from 'react';
//import "./style.css";
import './navbar.css';
import "../../assets/LineIcons.css";

function Navbar() {
    return (

        <div class="nav">
            <input type="checkbox" id="nav-check" />
                <div class="nav-header">
               
                    <div class="nav-title">
                    AnnoMate 
                    </div>
                
                </div>
            
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="nav-links">
                    <a href="#" target="_blank">Home</a>
                    <a href="#" target="_blank">Tutorial</a>
                    <a href="#" target="_blank">Features</a>
                    <a href="#" target="_blank">Login</a>

                </div>
               
        </div>
    );
        {/*<nav class="nav-menu">
            <ul>
                <li><a href="#hero"><i class="lni lni-home"></i> <span>Home</span></a></li>
                <li><a href="#dashboard"><i class="lni lni-dashboard"></i> <span>Dashboard</span></a></li>
                <li><a href="#services"><i class="lni lni-database"></i> <span>Services</span></a></li>
                <li><a href="#contact"><i class="lni lni-envelope"></i> <span>Contact Us</span></a></li>

            </ul>

    </nav>*/}
       
    
}

export default Navbar;