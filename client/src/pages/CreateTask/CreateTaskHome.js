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
                <section className="card-list">
                    <Link to="/createTask/enter-info" className="task-link">
                        <article className="card">
                        <header className="card-header">
                                <p>24 Feb 2021</p>
                                <h2>This is going to be the Task Name</h2>
                            </header>
                        </article>
                    </Link>
                    {/*Just testing account forms, replace links with a link to the create task form */}
                    <Link to="/createTask/create-account" className="task-link">
                        <div className="card">Create Account</div>
                    </Link>
                    <Link to="/createTask/log-in" className="task-link">
                        <div className="card">Log In</div>
                    </Link>                   
                </section>

                <h2 className="sub-title" >Image</h2>
                <section className="card-list">
                    <Link to="/createTask/enter-info" className="task-link">
                        <div className="card">Image 1</div>
                    </Link>
                    <Link to="/createTask/enter-info" className="task-link">
                        <div className="card">Image 2</div>
                    </Link>
                    <Link to="/createTask/enter-info" className="task-link">
                        <div className="card">Image 3</div>
                    </Link>                   
                </section>
                
            </div>
        </>
    )
}

export default CreateTaskHome;