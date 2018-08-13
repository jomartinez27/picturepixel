import React from 'react';
import { Route, Redirect, HashRouter, Link, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LogoutContainer from './logout/logout_container';
import Splash from './splash/splash';
import LogInFormContainer from './sessionForm/login_form_container';
import SignUpFormContainer from './sessionForm/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home_page';

import Photo from './photo/photo';

const App = () => (
  <div>
    <LogoutContainer />

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/home" component={Home} />
      <ProtectedRoute exact path ="/photos" component={Photo} />
      <Route exact path="/" component={Splash}/>
    </Switch>

  </div>
);

export default App;
