import React from 'react';
import { FieldGroup,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
  Radio,
  Button,
  HelpBlock,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import CustomNav from './nav.jsx';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  componentWillUnmount() {
    this.props.deleteErrors();
  }

  getValidateState() {
    const length = this.state.password.length;
    if (length >= 6) return 'success';
    if (length < 6) return 'warning';
  }

  handleChange() {
    this.setState()
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoUser(e) {
    e.preventDefault();
    const demoUser = Object.assign({}, {username: 'demo', password: 'password123'})
    this.props.login(demoUser);
  }

  render () {
    let head;
    if (this.props.formType === "signup") {
      head = "Signup"
    } else {
      head = "Login"
    }

    function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      {help && <HelpBlock>{help}</HelpBlock>}
      <FormControl {...props} />
    </FormGroup>
  );
}

const formInstance = (
  <form onSubmit={this.handleSubmit}>
    <ControlLabel className="session-label">{head}</ControlLabel>
    <FieldGroup
      id="formControlsText"
      type="text"
      placeholder="I am a user"
      help="Username"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      placeholder="Email"
      help="Email"
    />
  <FieldGroup
    id="formControlsPassword"
    type="password"
    help="Password"
    placeholder="6 or more characters"
    />
  <input type="submit" className="button-session" value="Sign Up"/>
  <Button onClick={this.demoUser} className="demo-user">Demo User</Button>
  </form>
);

const loginInstance = (
  <form onSubmit={this.handleSubmit}>
    <ControlLabel className="session-label">{head}</ControlLabel>
    <FieldGroup
      id="formControlsText"
      type="text"
      placeholder="I am a user"
      help="Username"
    />
  <FieldGroup
    id="formControlsPassword"
    type="password"
    help="Password"
    placeholder="6 or more characters"
    />
  <input type="submit" className="button-session" value="Log in"/>
  <Button onClick={this.demoUser} className="demo-user">Demo User</Button>
  </form>
)

  if (this.props.location.pathname === "/signup") {
      return (
        <div className="session-page">
          <CustomNav />
          <Grid className="session-container">
            <Row>
              <Col xs={12}>
                {formInstance}
              </Col>
            </Row>
          </Grid>
        </div>
      )
    } else if (this.props.location.pathname === "/login") {
      return (
        <div className="session-page">
          <CustomNav />
          <Grid className="session-container">
            <Row>
              <Col xs={12}>
                {loginInstance}
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
  }
}

export default withRouter(SessionForm);
