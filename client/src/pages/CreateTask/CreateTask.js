import React from 'react';
import {Route, Switch } from "react-router-dom";
import "./style.css";
//import Navbar from '../../components/Navbar';

import CreateTaskHome from './CreateTaskHome.js';


const CreateTask = () => {
    return (
        <>
           <Switch>
               <Route exact path = "/createTask" component={CreateTaskHome}/>
           </Switch>
        </>
    )
}

export default CreateTask;