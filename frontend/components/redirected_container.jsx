import { connect } from 'react-redux';

import Redirected from './redirect';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
})

export default connect(mapStateToProps)(Redirected)
