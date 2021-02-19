import React from 'react';
import "./style.css";
import Navbar from '../../components/Navbar';
import {Link} from 'react-router-dom';

const CreateTaskHome = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Create Task</h1>
                <h2 className="sub-title" >Text</h2>
                <section className="basic-grid">
                    <Link to="/createTask/basic-info">
                        <div className="card">Text 1</div>
                    </Link>
                    <Link to="/createTask/basic-info">
                        <div className="card">Text 1</div>
                    </Link>
                    <Link to="/createTask/basic-info">
                        <div className="card">Text 1</div>
                    </Link>                   
                </section>
                <h2 className="sub-title" >Image</h2>
                <section className="basic-grid">
                    <div className="card">Image 1</div>
                    <div className="card">Image 2</div>
                    <div className="card">Image 3</div>
                </section>
                
            </div>
        </>
    )
}

export default CreateTaskHome;