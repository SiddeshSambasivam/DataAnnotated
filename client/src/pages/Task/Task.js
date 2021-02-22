import React from 'react';
import Navbar from '../../components/Navbar';
import TextEntityAnnotation from '../../components/TextEntityAnnotation';
import JSON from 'json5';

const Task = () => {
    let userdata = JSON.parse(localStorage.getItem('userdata'))
    console.log("Task Page: ", userdata)
    
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Current Task</h1>
                <TextEntityAnnotation> </TextEntityAnnotation>
            </div>
        </>
    )
}

export default Task;