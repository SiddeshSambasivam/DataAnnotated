//This is step 2 in Create Task

import React from 'react';
import "./style.css";
import Navbar from '../../components/Navbar';
import CreateTaskForm from '../../components/CreateTaskForm';

const CreateTaskInfo = () => {
    return (
        <>
            <Navbar />
            <CreateTaskForm />
        </>
    )
}

export default CreateTaskInfo;