import React from 'react';
//import styles from "./style.css";
import './style.css';
import './Navbar.js';
import Introgif from '../../assets/graphotate-intro.gif';
import Navbar from './Navbar.js';
import Features from './Features/features.js';
import Tutorial from './Tutorial/tutorial.js';
import './typing.js';

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
            <h2>Data <span
                class="txt-rotate"
                data-period="2000"
                data-rotate='["Annotated!" ]'></span></h2>
                

              {/* <h2 class="head-title">Data Annotated</h2> */}
              <p>Your Annotation Mate!</p>
              
              
                <br></br>

              <div class="header-button">
                <a href="#" class="btn btn-border-filled">Get Started</a>
                <a href="#" class="btn btn-border page-scroll">Register</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-xs-12 p-0">
            
            <div class="intro-img">
                  <img src={Introgif} alt='Annotation Meets Programming!' />
            </div>            
          </div>
         
          
        </div> 
      </div>    
   
    </header>
<br></br>
    <div class="features" id="features">
      
      <Features></Features>
    </div>

    <div class="tutorial">
      <Tutorial></Tutorial>
    </div>
   
    <div>
     <center><h2>Made with ❤</h2></center> 
     
     <center><h4>By Ravisha, Siddesh and Nhi 😎</h4></center>
    </div>    

        </>
    );
}

export default Landing;