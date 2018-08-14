import { connect } from 'react-redux';

import PhotoForm from './photo_form';
import { createPhoto, fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo)),
  fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
