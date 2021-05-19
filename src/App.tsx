import React from 'react';
import "./stylesheets/style.css";

import InstagramNavBar from './components/InstagramNavBar';
import InstagramHomePage from './components/InstagramHomePage';
import InstagramDMs from './components/InstagramDMs';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <InstagramNavBar />
            <Switch>
              <Route exact path="/" component={InstagramHomePage} />
              <Route path="/direct" component={InstagramDMs} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;