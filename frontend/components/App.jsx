import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Signup from './session/signup_form_container';
import Login from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PhotoContainer from './photos/photoContainer';
import UserContainer from './users/users';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={Login}/>
      <AuthRoute exact path="/signup" component={Signup}/>
      <ProtectedRoute exact path="/photos" component={PhotoContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserContainer} />
      <Route path="/" component={Home}/>
      <Redirect to="/"/>
    </Switch>
  </div>
)

export default App;
