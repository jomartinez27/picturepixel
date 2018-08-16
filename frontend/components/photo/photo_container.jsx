import { connect } from 'react-redux';

import Photo from './photo';
import { fetchPhotos, fetchPhoto, deletePhoto } from '../../actions/photo_actions';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    photos: Object.values(state.entities.photos),
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  deletePhoto: photoId => dispatch(deletePhoto(photoId)),
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo)
