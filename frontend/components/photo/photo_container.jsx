import { connect } from 'react-redux';

import Photo from './photo';
import { fetchPhotos } from '../../actions/photo_actions';

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(null, mapDispatchToProps)(Photo)
