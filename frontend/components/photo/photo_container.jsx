import { connect } from 'react-redux';

import Photo from './photo';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  currentPhotos: state.entities.photos
})

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
})

export default connect(null, mapDispatchToProps)(Photo)
