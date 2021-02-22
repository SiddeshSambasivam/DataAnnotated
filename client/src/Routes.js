import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home  from './pages/Home';
import MarketPlace from './pages/MarketPlace';
import User from './pages/User';
import Task from './pages/Task';
import JSON from 'json5';

import { homePath, marketplacePath, profilePath, taskPath, createTaskPath, landingPath } from './constants/path';
import Landing from './pages/Landing/Landing';

const user_data = {
  user_id:"user123",
  user_name:"Test user",
  email:"testmail@gmail.com",
  annotation_data: [
    {
      task_id:"t123",
      task_name:"POS Tagging",
      task_type:"Text Tagging",
      raw_data: ['On Monday night , Mr. Fallon will have a co-host for the first time : The rapper Cardi B , who just released her first album, " Invasion of Privacy . "', 'My name is siddesh and its been a great way to talk and quick brown fox jumps over the lazy dog'],
      annotated_data:[],
      labels:["PERSON", "ORGANIZATION", "LOCATION"],
    }
  ],
  current_task:null
}

sessionStorage.setItem("userdata", JSON.stringify(user_data))

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={landingPath} component={Landing} />
          <Route exact path={homePath} component={Home} />
          <Route path={marketplacePath} component={MarketPlace} />
          <Route path={profilePath} component={User} />
          <Route path={taskPath} component={Task} />
          <Route path={createTaskPath} component={User} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;