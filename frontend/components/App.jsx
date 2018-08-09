import React from 'react';
import { Route, Redirect, HashRouter, Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './sessionForm/login_form_container';
import SignUpFormContainer from './sessionForm/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="banner">
      <Link style={{textDecoration: 'none'}} className="logo-banner" to="/">PicturePx</Link>
      <GreetingContainer />
    </header>
    <img src={window.image}/>

    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
