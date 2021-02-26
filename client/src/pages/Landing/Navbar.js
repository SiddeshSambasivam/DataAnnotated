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
                    AnnoMated 
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
        
    
}

export default Navbar;