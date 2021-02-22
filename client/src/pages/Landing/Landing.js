import React from 'react';
import "./style.css";
import './Navbar.js';
//import Navbar from './Navbar.js';

function Landing() {
    return (
        <>
                      
    <header id="home" class="hero-area">   
    
      <div class="overlay">
        <span></span>
        {/* <span></span> */}
      </div>
      
      <div class="container">     
      {/* <Navbar></Navbar>  */}
        <div class="row space-100">
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div class="contents">
              <h2 class="head-title">Annotation Mate</h2>
              
              <h4><span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ "Your Data", "Annotated", "Right here!" ]'></span></h4>
              <div class="header-button">
                <a href="#" class="btn btn-border-filled">Get Started</a>
                <a href="contact" class="btn btn-border page-scroll">Contact Us</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-xs-12 p-0">
            <div class="intro-img">
              <img src="img/intro.png" alt=""></img>
            </div>            
          </div>
        </div> 
      </div>             
    </header>
   
            

        </>
    );
}

export default Landing;