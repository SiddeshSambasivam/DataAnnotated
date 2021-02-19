import React from 'react';
import {Route, Switch } from "react-router-dom";
import "./style.css";
//import Navbar from '../../components/Navbar';

import CreateTaskHome from './CreateTaskHome.js';
import CreateTaskInfo from './CreateTaskInfo.js';
import CreateTaskData from './CreateTaskData.js';
import CreateTaskUsers from './CreateTaskUsers.js';


const CreateTask = () => {
    return (
        <>
           <Switch>
               <Route exact path = "/createTask" component={CreateTaskHome}/>
               <Route path = "/createTask/basic-info" component={CreateTaskInfo}/>
               <Route path = "/createTask/data" component={CreateTaskData}/>
               <Route path = "/createTask/add-users" component={CreateTaskUsers}/>
           </Switch>
        </>
    )
}

export default CreateTask;