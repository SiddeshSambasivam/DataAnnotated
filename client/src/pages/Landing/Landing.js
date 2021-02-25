import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import JSON from 'json5';

const Landing = () => {

    const [loggedIn, setLoginStatus] = useState(false);

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
      
    return(
        <>
            Landing Page
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Landing;