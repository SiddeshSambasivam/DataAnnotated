import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TextEntityAnnotation from '../../components/TextEntityAnnotation';
import JSON from 'json5';

const Task = (props) => {
    
    let cachedData = JSON.parse(localStorage.getItem('cachedData'));
        
    if(cachedData.loggedIn == false){
        console.log("True")
        return <Redirect to="/login" />
    }
    
    if(cachedData.current_task == null){
        let cachedData = JSON.parse(localStorage.getItem('cachedData'));
        if(cachedData.current_task == null){
        
            return (
                <>
                    <Navbar />
                    <div className="container">
                        <h1 className="title">No Task is current in progress!</h1>
                    </div>
                </>
            )     
        }
    }
    console.log("Task Page: ", cachedData.current_task)
    const Tasks = {
        "TextEntityAnnotation": TextEntityAnnotation,
    }
    const Task = Tasks[cachedData.current_task.task_type]

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">{cachedData.current_task.task_name}</h1>
                <Task />
            </div>
        </>
    )
}

export default Task;