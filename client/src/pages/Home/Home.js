import React from 'react';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Welcome User!</h1>
                <h2 className="sub-title" style={{marginTop: "0vh"}}>Dashboard</h2>
                <section className="basic-grid">
                    <div className="card">Create Task</div>
                    <div className="card">2</div>
                    <div className="card">3</div>
                </section>
                <h2 className="sub-title" >Tutorial</h2>
                <section className="basic-grid">
                    <div className="card">Getting Started</div>
                    <div className="card">Sentiment Analysis</div>
                </section>
                <h2 className="sub-title">Marketplace</h2>
                <section className="basic-grid">
                    <div className="card">Task 1</div>
                    <div className="card">Task 2</div>
                    <div className="card">Task 3</div>
                </section>
            </div>
        </>
    )
}

export default Home;