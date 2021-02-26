import React from 'react';
import Navbar from '../../components/Navbar';
import JSON from 'json5';
import {Redirect, Link} from 'react-router-dom';
import userimg from '../../assets/user.png';

const Home = () => {

    // Cache the data in the session storage 
    let cachedData = JSON.parse(localStorage.getItem('cachedData'));
    console.log("Home page: ", cachedData)
    let userdata = null;
    
    if(cachedData.loggedIn == false){
        console.log("True")
        return <Redirect to="/login" />
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
            <a href="/task" className="card-link" key={task.task_id}>
                <article className="card" id={JSON.stringify(task)} onClick={handleClick}>
                    <header className="card-header">
                        <p>24 Feb 2021</p>
                        <h2>{task.task_name}</h2>
                    </header>
                    <div class="card-author">
                                <a class="author-avatar" href="#">
                                    <img src={userimg} />
                                </a>
                                <svg class="half-circle" viewBox="0 0 106 57">
                                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                </svg>

                                <div class="author-name">
                                    <div class="author-name-prefix">Author</div>
                                        {cachedData.user_data.name}
                                </div>
                            </div>                    
                </article>
            </a >
        )
    })

    return (
        <>
            <Navbar />
            <div className="container" style={{transition:"0.5ms"}}>
                <h2 className="title">Annotation Tasks</h2>

                <section className="card-list">
                        <article className="card" id="createTask" onClick={handleClick}>
                            {/* <header className="card-header"> */}
                                {/* <p>24 Feb 2021</p> */}
                                {/* <h2>This is going to be the Task Name</h2> */}
                            {/* </header> */}
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="create-icon"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>

                        </article>

                    {tasks}
                </section>
                
                
                <section id="community">
                <h2 className="title" >Community</h2>
                <section className="card-list">
                        <article className="card" id="createTask" onClick={handleClick}>
                            <header className="card-header">
                                <p>24 Feb 2021</p>
                                <h2>This is going to be the Task Name</h2>
                            </header>
                        </article>

                        <article className="card" id="createTask" onClick={handleClick}>
                            <header className="card-header">
                                <p>24 Feb 2021</p>
                                <h2>This is going to be the Task Name</h2>
                            </header>
                        </article>

                        <article className="card" id="createTask" onClick={handleClick}>
                            <header className="card-header">
                                <p>24 Feb 2021</p>
                                <h2>This is going to be the Task Name</h2>
                            </header>
                        </article>

                        <article className="card" id="createTask" onClick={handleClick}>
                            <header className="card-header">
                                <p>24 Feb 2021</p>
                                <h2>This is going to be the Task Name</h2>
                            </header>
                        </article>                   
                </section>
                </section>
                
                
                <h2 className="sub-title">Tutorial</h2>
                <section id="tutorial">
                <section className="card-list">
                        <article className="card" id="createTask" onClick={handleClick}>
                            <header className="card-header">
                                <p>24 Feb 2021</p>
                                <h2>This is going to be the Task Name</h2>
                            </header>
                        </article>

                        <article className="card" id="createTask" onClick={handleClick}>
                            <header className="card-header">
                                <p>24 Feb 2021</p>
                                <h2>This is going to be the Task Name</h2>
                            </header>
                        </article>

                        <article className="card" id="createTask" onClick={handleClick}>
                            <header className="card-header">
                                <p>24 Feb 2021</p>
                                <h2>This is going to be the Task Name</h2>
                            </header>
                        </article>

                        <article className="card" id="createTask" onClick={handleClick}>
                            <header className="card-header">
                                <p>24 Feb 2021</p>
                                <h2>This is going to be the Task Name</h2>
                            </header>
                        </article>                   
                </section>                
                </section>
            </div>
        </>
    )
}

export default Home;