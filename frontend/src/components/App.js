import React, { Component } from 'react';
import Header from './Header';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';
import Cities from './Cities';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/login' component={ LoginForm } />
          <Route exact path='/signup' component={ SignupForm } />
          <Route exact path='/cities' component={ Cities } />
          <Route  path='/*' render={() => ( <Redirect to='/' />)} />
        </Switch>
      
      </div>
    );
  }
}

export default App;
