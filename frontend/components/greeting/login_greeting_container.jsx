import { connect } from 'react-redux';

import LoggedIn from './login_greeting';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

export default connect(mapStateToProps)(LoggedIn);
