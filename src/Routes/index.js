import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from '../Routes/Landing';
import HomePage from '../Routes/HomePage';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path={"/home"} component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRoutes;