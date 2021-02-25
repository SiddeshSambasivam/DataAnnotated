import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import JSON from 'json5';

import Navbar from '../../components/Navbar';
import userImg from '../../assets/user.png';
import "./style.css";

const User = () => {

    const cachedData = JSON.parse(localStorage.getItem('cachedData'));
    let userdata = null;
        
    if(cachedData.loggedIn == false){
        console.log("True")
        return <Redirect to="/" />
    }
    else{
        userdata = cachedData.user_data;
    }
    
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title" align="center">
                    <img src={userImg} style={{width:"2em", marginTop:"15vh"}}/>
                    
                    <div>
                        {userdata.user_id}
                    </div>
                    <div>
                        {userdata.user_name}
                    </div>                  
                    <div>
                        {userdata.email}
                    </div>                      
                </h1>
            </div>
        </>
    )
}

export default User;