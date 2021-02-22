import React from 'react';
import Navbar from '../../components/Navbar';
import userImg from '../../assets/user.png';
import JSON from 'json5';

import "./style.css";

const User = () => {
    const userdata = JSON.parse(localStorage.getItem('userdata'))
    
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