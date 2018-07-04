import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Home from './components/Home';
import Cities from './components/Cities';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()




const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')

if (token) {
  store.dispatch({type: AUTH_USER})
}


ReactDOM.render(
  <Provider store={store}>
  <Router>
  <MuiThemeProvider>
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/signin' component={ Signin} />
          <Route exact path='/signup' component={ Signup } />
          <Route path='/signout' component={ Signout }/>
          <Route exact path='/cities' component={ Cities } />
          <Route  path='/*' render={() => ( <Redirect to='/' />)} />
        </Switch>
    </div>
  </MuiThemeProvider>
  </Router>
  </Provider>


,document.getElementById('root'));
registerServiceWorker();

