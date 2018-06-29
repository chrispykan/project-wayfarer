import React, { Component } from 'react';
import Header from './components/Header';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Cities from './components/Cities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/cities' component={ Cities } />
          <Route  path='/*' render={() => ( <Redirect to='/' />)} />
        </Switch>

      </div>
    );
  }
}

export default App;
