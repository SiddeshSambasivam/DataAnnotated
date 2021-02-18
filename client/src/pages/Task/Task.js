import React from 'react';
import Navbar from '../../components/Navbar';
import ImageAnnotator from '../../components/ImageAnnotator';
import TextEntityAnnotator from '../../components/TextEntityAnnotator';

const Task = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Current Task</h1>
                <TextEntityAnnotator />
            </div>
        </>
    )
}

export default Task;