//This is step 2 in Create Task

import React from 'react';
import "./style.css";
import Navbar from '../../components/Navbar';

const CreateTaskInfo = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Basic Info</h1>
                <h2 className="sub-title" >Task Name</h2>
                {/*Input field for task name */}
                <form>
                    <label>
                        <input type="text" name="task-name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <h2 className="sub-title" >Task-Specific Inputs </h2>
                {/*Input field for task inputs */}             
            </div>
        </>
    )
}

export default CreateTaskInfo;