import { connect } from 'react-redux';

import Photo from './photo';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo)),
  fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
