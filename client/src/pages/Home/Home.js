import React from 'react';
import Navbar from '../../components/Navbar';
import JSON from 'json5';
import {Redirect, Link} from 'react-router-dom';

const Home = () => {

    // Cache the data in the session storage 
    let cachedData = JSON.parse(localStorage.getItem('cachedData'));
    console.log("Home page: ", cachedData)
    let userdata = null;
    
    if(cachedData.loggedIn == false){
        console.log("True")
        return <Redirect to="/" />
    }
    else{
        userdata = cachedData.user_data;
    }

    function handleClick(e){
        if (e.target.id == 'createTask'){
            // you can redirect to createTask Page
            console.log(e.target.id);   
            // set the task id in the session storage
        }
        else{
            // console.log(e.target.id);  
            cachedData.current_task = JSON.parse(e.target.id)
            localStorage.setItem('cachedData', JSON.stringify(cachedData))
        }
    }

    const tasks = userdata.annotation_data.map((task) => {
        return(
            <Link to={{pathname:"/task"}}  key={task.task_id}>
                <div id={JSON.stringify(task)} className="card" key={task.task_id} onClick={handleClick}>
                    {task.task_name}
                </div>
            </Link>
        )
    })

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Welcome {userdata.user_name}!</h1>
                <h2 className="sub-title" style={{marginTop: "0vh"}}>Dashboard</h2>
                <section className="basic-grid">
                    <div className="card" id="createTask" onClick={handleClick}>Create Task</div>
                    {tasks}
                </section>
                <h2 className="sub-title" >Tutorial</h2>
                <section className="basic-grid">
                    <div className="card">Getting Started</div>
                    <div className="card">Sentiment Analysis</div>
                </section>
                <h2 className="sub-title">Marketplace</h2>
                <section className="basic-grid">
                    <div className="card">Task 1</div>
                    <div className="card">Task 2</div>
                    <div className="card">Task 3</div>
                </section>
            </div>
        </>
    )
}

export default Home;