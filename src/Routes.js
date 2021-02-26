import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home  from './pages/Home';
import MarketPlace from './pages/MarketPlace';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import User from './pages/User';
import Task from './pages/Task';
import JSON from 'json5';

import { homePath, marketplacePath, profilePath, 
  taskPath, createTaskPath, loginPath, signupPath, landingPath } from './constants/path';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={landingPath} component={Landing} />
          <Route exact path={loginPath} component={Login} />
          <Route exact path={signupPath} component={Signup} />
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
