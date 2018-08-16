import { connect } from 'react-redux';

import User from './user';
import { fetchUser, fetchUsers } from '../../actions/session_actions';
import { fetchPhotos, fetchPhoto, deletePhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users
  const photos = Object.values(state.entities.photos)
  return {
    user: users[ownProps.match.params.userId],
    photos: photos,
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => ({
  deletePhoto: id => dispatch(deletePhoto(id)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(User);
