import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditForm from './edit_photo_form';
import { updatePhoto, fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos[ownProps.match.params.photoId]
})

const mapDispatchToProps = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  updatePhoto: photo => dispatch(updatePhoto(photo))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm))
