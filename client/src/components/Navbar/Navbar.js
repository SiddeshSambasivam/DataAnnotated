import React, {useState} from 'react';
import "./navbar.css";
import JSON from 'json5';

const Navbar = () => {

    let cachedData = JSON.parse(localStorage.getItem('cachedData'));
    let annotationTasks = cachedData.user_data.annotation_data;

    const [expand, setExpand] = useState(false);

    const HandleLogout = () => {
        let cachedData = JSON.parse(localStorage.getItem('cachedData'));
        cachedData.loggedIn = false;
        localStorage.setItem("cachedData", JSON.stringify(cachedData));
        console.log("clicked", cachedData)
    }

    const handleClick = (e) => {
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

    const TaskList = annotationTasks.map((task) => {
        return (
            <li className="nav-item">
            <a href="/task" id={JSON.stringify(task)} key={task.task_id} onClick={handleClick} className="nav-link">
              <span className="expand-task">{task.task_name}</span>
            </a>
          </li>
        )
    })

    const handleExpand = () => {
        setExpand(!expand)
    }

    return (
        <>
        <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="/home" className="nav-link">
              <span className="link-text logo-text">Data Annotated</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a href="/home" className="nav-link">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <g className="fa-group" style={{stroke: "#ff8a00"}}>
                <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>                  
                </g>
              </svg>
              <span className="link-text" style={{color:"#eeeeee"}}>Home</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/marketplace" className="nav-link">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline--fa fa-users fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
              <span className="link-text" style={{color:"#eeeeee"}}>Community</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link" onClick={handleExpand}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="project-diagram" className="svg-inline--fa fa-project-diagram fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <g className="fa-group">
                     <path fill="currentColor" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
                </g>
              </svg>
              <span className="link-text" style={{color:"#eeeeee"}}>Tasks</span>
            </a>
          </li>
          {expand ? TaskList : null}
        </ul>
      </nav>
      <nav className="navbar-top">
        <ul className="navbar-nav-top">   
          <li className="nav-link-top">     
            <h3>Welcome {cachedData.user_data.user_name}!</h3>
          </li>
          <li className="nav-link-top">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <g class="fa-group">
                <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                </path>
              </g>
            </svg>
          </li>
      </ul>
      </nav>
      </>
    )
}

export default Navbar;