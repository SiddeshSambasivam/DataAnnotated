<<<<<<< HEAD
import React from 'react';
//import styles from "./style.css";
import './style.css';
import './Navbar.js';
import Introgif from '../../assets/graphotate-intro.gif';
import Navbar from './Navbar.js';
import Features from './Features/features.js';


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
              <h2 class="head-title">Data Annotated</h2>
              <p>Your Annotation Mate!</p>
              <h4><span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ "Your Data", "Annotated", "Right here!" ]'></span></h4>
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
    <div class="features">
      
      <Features></Features>
    </div>
   
    <div>
     <center><h2>Made with ❤</h2></center> 
     
     <center><h4>By Ravisha, Siddesh and Nhi 😎</h4></center>
    </div>    

        </>
    );
=======
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import JSON from 'json5';

import './Landing.module.css';

const Landing = () => {

    const [loggedIn, setLoginStatus] = useState(JSON.parse(localStorage.getItem("cachedData")).loggedIn);
    // let cachedData = ;?

    const handleLogin = () => {
        const cachedData = {
            loggedIn: true,
            user_data:{
                user_id:"user123",
                user_name:"Test user",
                email:"testmail@gmail.com",
                annotation_data: [
                  {
                    task_id:"t123",
                    task_name:"POS Tagging",
                    task_type:"TextEntityAnnotation",
                    raw_data: ['On Monday night , Mr. Fallon will have a co-host for the first time : The rapper Cardi B , who just released her first album, " Invasion of Privacy . "', 'My name is siddesh and its been a great way to talk and quick brown fox jumps over the lazy dog'],
                    annotated_data:[],
                    labels:["PERSON", "ORGANIZATION", "LOCATION"],
                  }
                ],
            },
            current_task:null
        }

        localStorage.setItem("cachedData", JSON.stringify(cachedData))
        setLoginStatus(true)
    }

    if(loggedIn == true){
        console.log("Logged In")
        return <Redirect to={{pathname:"/home"}} />
    }
    else{
        console.log("Logged In")
        return <Redirect to={{pathname:"/login"}} />        
    }

    return(
        <>  
            Landing Page
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <a href="/login">Login</a>
        </>
    )
>>>>>>> main
}

export default Landing;