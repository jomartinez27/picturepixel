import React from 'react';
import { Route, Redirect, HashRouter, Link, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash';
import LogInFormContainer from './sessionForm/login_form_container';
import SignUpFormContainer from './sessionForm/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={Splash}/>
    </Switch>
);

export default App;
