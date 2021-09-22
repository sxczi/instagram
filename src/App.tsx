import React from 'react';

import "./stylesheets/style.css";

import InstagramNavBar from './components/pages/InstagramNavBar';
import InstagramHomePage from './components/pages/InstagramHomePage';
import InstagramDMs from './components/pages/InstagramDMs';
import InstagramActivity from './components/pages/InstagramActivity';
import InstagramExplore from './components/pages/InstagramExplore';
import InstagramProfile from './components/pages/InstagramProfile';
import InstagramPost from './components/pages/InstagramPost';
import Instagram404 from './components/pages/Instagram404';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './components/profile';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <InstagramNavBar />
            <Switch>
                <Route exact path="/" component={InstagramHomePage} />
                <Route path="/direct/inbox/" component={InstagramDMs} />
                <Route exact path="/accounts/activity/" component={InstagramActivity} />
                <Route exact path="/explore/" component={InstagramExplore} />
                <Route path="/profile/" component={InstagramProfile} />
                <Route exact path="/p/:postId/" component={InstagramPost} />
                <Route exact path="/:username" component={Profile} />
                <Route component={Instagram404} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;