import { connect } from 'react-redux';

import User from './user';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const users = Object.values(state.entities.users)
  return {
    user: users[ownProps.match.params.userId]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})


export default connect(mapStateToProps, mapDispatchToProps)(User);
