import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import JSON from 'json5';

import "./style.css";
import Navbar from '../../components/Navbar';

const MarketPlace = () => {

    const cachedData = JSON.parse(localStorage.getItem('cachedData'));
        
    if(cachedData.loggedIn == false){
        console.log("True")
        return <Redirect to="/login" />
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Market Place</h1>
                <section className="basic-grid">
                    <div className="card">Task 1</div>
                    <div className="card">Task 2</div>
                    <div className="card">Task 3</div>
                </section>
            </div>
        </>
    )
}

export default MarketPlace;