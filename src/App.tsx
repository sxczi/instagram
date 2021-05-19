import React from 'react';
import "./stylesheets/style.css";

import InstagramNavBar from './components/InstagramNavBar';
import InstagramHomePage from './components/InstagramHomePage';

class App extends React.Component {
  render() {
    return (
      <div>
        <InstagramNavBar />
        <InstagramHomePage />
      </div>
    )
  }
}

export default App;