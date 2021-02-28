import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TextEntityAnnotation from '../../components/TextEntityAnnotation';
import JSON from 'json5';

const Task = (props) => {
    
    let cachedData = JSON.parse(localStorage.getItem('cachedData'));
        
    if(cachedData.loggedIn == false){
        return <Redirect to="/login" />
    }

    const objIndex = cachedData.user_data.annotation_data.findIndex((obj) => obj.task_id == props.match.params.id) 
    const annotation_data = cachedData.user_data.annotation_data[objIndex]

    
    if(props.match.params.id == null){
        
        return (
            <>
                <Navbar />
                <div className="container">
                    <h1 className="title">No Task is current in progress!</h1>
                </div>
            </>
        )     
    }
    
    const Tasks = {
        "TextEntityAnnotation": TextEntityAnnotation,
    }
    const Task = Tasks[annotation_data.task_type]

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">{annotation_data.task_name}</h1>
                <Task current_task={annotation_data}/>
            </div>
        </>
    )
}

export default Task;