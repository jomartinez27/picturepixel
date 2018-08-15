import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deletePhoto, fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const photos = Object.values(state.entities.photos)
  return {
    photo: photos[ownProps.match.params.photoId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
  }
}

class EditPhotoForm extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.photo.id !== nextProps.match.params.photoId) {
      this.props.fetchPhoto(nextProps.match.params.photoId);
    }
  }

  render () {
    const { deletePhoto, photo} = this.props;
    return (
      <div className="delete-container">
        <button onClick={deletePhoto}><i className="material-icons">delete_outline</i></button>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPhotoForm))
