import { connect } from 'react-redux';

import PersistLogo from './persist_logo';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
})

export default connect(mapStateToProps)(PersistLogo);
