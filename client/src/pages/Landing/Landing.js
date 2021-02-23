import React from 'react';
import styles from "./style.css";
import './Navbar.js';
import Introgif from '../../assets/graphotate-intro.gif';
import Navbar from './Navbar.js';


function Landing() {
    return (
        <>
            <Navbar></Navbar>  
    <header id="home" class="hero-area">   
    
      <div class="overlay">
        <span></span>
      </div>
      
      <div class="container">     
      
        <div class="row space-100">
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div class="contents">
              <h2 class="head-title">AnnoMated</h2>
              <p>Your Annotation Mate!</p>
              <h4><span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ "Your Data", "Annotated", "Right here!" ]'></span></h4>
              <div class="header-button">
                <a href="#" class="btn btn-border-filled">Get Started</a>
                <a href="contact" class="btn btn-border page-scroll">Register</a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-12 col-xs-12 p-0">
            
            <div class="intro-img">
                      <img
                        src={Introgif}
                        alt='Annotation Meets Programming!' />
            </div>            
          </div>
         
          
        </div> 
      </div>             
    </header>
   
            

        </>
    );
}

export default Landing;