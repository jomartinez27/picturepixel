import { connect } from 'react-redux';

import Splash from './splash';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
