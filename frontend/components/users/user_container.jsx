import { connect } from 'react-redux';

import User from './user';
import { fetchUser, fetchUsers } from '../../actions/session_actions';
import { fetchPhotos, fetchPhoto, deletePhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const users = Object.values(state.entities.users)
  const photos = Object.values(state.entities.photos)
  return {
    user: users[ownProps.match.params.userId],
    photos: photos
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(User);
