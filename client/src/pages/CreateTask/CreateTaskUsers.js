//This is the final step (step 4) in Create Task

import React from 'react';
import "./style.css";
import Navbar from '../../components/Navbar';

const CreateTaskUsers = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Add Users</h1>
                <h2 className="sub-title" >Search</h2>
                {/*Input field for task name */}
                <h2 className="sub-title" >User List</h2>
                {/*Input field for task inputs */}             
            </div>
        </>
    )
}

export default CreateTaskUsers;