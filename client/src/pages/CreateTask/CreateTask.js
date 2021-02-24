import React from 'react';
import {Route, Switch } from "react-router-dom";
import "./style.css";

import CreateTaskHome from './CreateTaskHome.js';
import CreateTaskInfo from './CreateTaskInfo.js';
import CreateTaskData from './CreateTaskData.js';
import CreateTaskUsers from './CreateTaskUsers.js';

//These are temporary, for testing purposes
import AccountForm from '../../components/AccountForm';
import LogInForm from '../../components/LogInForm';


const CreateTask = () => {
    return (
        <>
           <Switch>
               <Route exact path = "/createTask" component={CreateTaskHome}/>
               <Route path = "/createTask/basic-info" component={CreateTaskInfo}/>
               <Route path = "/createTask/data" component={CreateTaskData}/>
               <Route path = "/createTask/add-users" component={CreateTaskUsers}/>
               {/* These are temporary, for testing purposes */}
               <Route path = "/createTask/create-account" component={AccountForm}/>
               <Route path = "/createTask/log-in" component={LogInForm}/>
           </Switch>
        </>
    )
}

export default CreateTask;