import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './sessionForm/login_form_container';
import SignupFormContainer from './sessionForm/signup_form_container';

const App = () => (
  <div>
    <header>
      <h3>Picture Px</h3>
      <GreetingContainer />

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    </header>
  </div>
);

export default App;
