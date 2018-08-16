import { connect } from 'react-redux';

import PhotoForm from './photo_form';
import { createPhoto, fetchPhotos, deleteErrors } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.photo
})

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  deleteErrors: () => dispatch(deleteErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
