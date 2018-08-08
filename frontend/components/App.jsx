import React from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './sessionForm/login_form_container';
import SignUpFormContainer from './sessionForm/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h3>Picture Px</h3>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
