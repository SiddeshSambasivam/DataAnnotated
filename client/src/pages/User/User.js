import React from 'react';
import Navbar from '../../components/Navbar';

import "./style.css";

const User = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">User Profile</h1>
            </div>
        </>
    )
}

export default User;