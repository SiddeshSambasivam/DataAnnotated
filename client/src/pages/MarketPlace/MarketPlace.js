import React from 'react';
import "./style.css";
import Navbar from '../../components/Navbar';

const MarketPlace = () => {
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