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
                                <p>Text Data</p>

                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="signature" class="svg-inline--fa fa-signature fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="mini-logo">
                                    <path fill="currentColor" d="M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2 24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8 11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4 42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3 16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6 138.4-65.8 8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z"></path>
                                </svg>

                                <h2>Named Entity Recognition</h2>
                                <p className="info">
                                    Task of locating and classifying named entities mentioned in unstructured text.
                                </p>
                                <p style={{color:"#ff8a00", marginTop:"4rem"}}>Click the card to create this Task</p>
                            </header>
                        </article>
                    </Link>
                    <article className="card">
                        <header className="card-header">
                                <p>Text Data</p>

                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="smile-beam" class="svg-inline--fa fa-smile-beam fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="mini-logo">
                                    <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM112 223.4c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.3 7.4-15.8 4-15.1-4.5zm250.8 122.8C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.3 24.6 20.5zm6.2-118.3l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.3-15.6 4-14.9-4.5 3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.6 8.6-11 11.9-15.1 4.5z"></path>
                                </svg>

                                <h2>Sentiment Analysis</h2>
                                <p className="info">
                                    Task of determining whether data is positive, negative or neutral.
                                </p>
                                <p style={{color:"#ccccc", marginTop:"4rem"}}>Currently Unavailable. In development</p>
                            </header>
                    </article>
                    <article className="card">
                        <header className="card-header">
                                <p>Text Data</p>

                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" class="svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mini-logo">
                                    <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
                                </svg>
                                <h2>Question Answering</h2>
                                <p className="info">
                                Task of answering questions based on the given context.
                                </p>
                                <p style={{color:"#ccccc", marginTop:"4rem"}}>Currently Unavailable. In development</p>
                            </header>
                    </article>       
                    <article className="card">
                        <header className="card-header">
                                <p>Text Data</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="language" class="svg-inline--fa fa-language fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="mini-logo">
                                    <path fill="currentColor" d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"></path>
                                </svg>

                                <h2>Machine Translation</h2>
                                <p className="info">
                                Task of translating text from one language to ine or more languages.
                                </p>
                                <p style={{color:"#ccccc", marginTop:"4rem"}}>Currently Unavailable. In development</p>
                            </header>
                    </article>                                        
                    {/* Just testing account forms, replace links with a link to the create task form
                    <Link to="/createTask/create-account" className="task-link">
                        <div className="card">Create Account</div>
                    </Link>
                    <Link to="/createTask/log-in" className="task-link">
                        <div className="card">Log In</div>
                    </Link>                    */}
                </section>

                <h2 className="sub-title" >Image</h2>
                <section className="card-list">
                    <article className="card">
                        <header className="card-header">
                            <p>Text Data</p>
                            <h2>Machine Translation</h2>

                            <p className="info">
                                Task of translating text from one language to ine or more languages.
                            </p>
                            <p style={{color:"#ccccc", marginTop:"4rem"}}>Currently Unavailable. In development</p>
                        </header>
                    </article>                                                                        
                </section>
                
            </div>
        </>
    )
}

export default CreateTaskHome;