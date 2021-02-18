import React from 'react';
import Navbar from '../../components/Navbar';
import TextAnnotation from '../../components/TextAnnotation';

const Task = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Current Task</h1>
                <TextAnnotation> </TextAnnotation>
            </div>
        </>
    )
}

export default Task;