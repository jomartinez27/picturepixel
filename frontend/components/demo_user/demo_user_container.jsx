import { connect } from 'react-redux';

import DemoUser from './demo_user';
import { login } from '../../actions/session_actions';


const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(null, mapDispatchToProps)(DemoUser);
