import React from 'react';
import "./stylesheets/style.css";

import InstagramNavBar from './components/InstagramNavBar';
import InstagramBodyContainer from './components/InstagramBodyContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <InstagramNavBar />
        <InstagramBodyContainer />
      </div>
    )
  }
}

export default App;