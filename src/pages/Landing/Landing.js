import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import JSON from 'json5';

import './Landing.module.css';

const Landing = () => {

    // const [loggedIn, setLoginStatus] = useState(JSON.parse(localStorage.getItem("cachedData")).loggedIn);
    // let cachedData = ;?
    const cachedData = {
        JWT:null,
        loggedIn:false,
        user_data:{},
        current_task:null
    }


    if(cachedData.loggedIn == true){
        return <Redirect to={{pathname:"/home"}} />
    }
    else{
        return <Redirect to={{pathname:"/login"}} />        
    }

    return(
        <>  
            Landing Page
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <a href="/login">Login</a>
        </>
    )
}

export default Landing;