import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home  from './pages/Home';
import MarketPlace from './pages/MarketPlace';
import User from './pages/User';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/marketplace" component={MarketPlace} />
          <Route path="/profile" component={User} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
