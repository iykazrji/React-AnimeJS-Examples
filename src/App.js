import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import SingleAnimations from './pages/single-animations/single-animations.js'
import SingleAnimation from './pages/single-animations/single-animations.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={SingleAnimation} />
        </Switch>
      </Router>
    );
  }
}

export default App;
