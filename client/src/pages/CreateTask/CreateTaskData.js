//This is step 3 in Create Task

import React from 'react';
import "./style.css";
import Navbar from '../../components/Navbar';

const CreateTaskData = () => {
    return (
        <>
            <Navbar />
            <div className="container">
            <h1 className="title">Data</h1>
                <h2 className="sub-title" >Upload Data</h2>
                {/*Input field for uploading */}
                <h2 className="sub-title" >Data Format</h2>
                {/*Input field for format */}             
            </div>
        </>
    )
}

export default CreateTaskData;