import React from 'react'

import PhotoIndex from './photo_index';
import NavBar from '../greeting/nav_bar';
import { withRouter } from 'react-router-dom'
import DeletePhotoContainer from './edit_photo_container';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: this.props.photos
    }

  }

  componentDidMount() {
    this.props.fetchPhotos()
  }

  componentWillReceiveProps(newProps){
    if (newProps.photos.length !== this.state.photos.length) {
      this.setState({photos: newProps.photos})
    }
  }

  render () {
    return (
      <div>
        <NavBar />
          <div className="flow-photo">
            <ul className="ul-photo-list">
              <div className="photo-container">
                {this.state.photos.map(photo => <li
                  className="photo-list"
                  key={photo.id}>
                  <div className="photo-header">
                    <div className="photo-profile-logo"><i className="material-icons profile-drop">account_circle</i></div>
                    <p className="photo-title">{photo.title}</p>
                  </div>
                  <div className="single-photo-container"><img key={photo.id} className="photo" src={photo.photoUrl}/></div>
                  <div className="photo-footer">{photo.description}</div>
                  { photo.photographer_id === this.props.currentUser.id ? <div className="delete-container">
                    <div><button className="delete-btn" onClick={() => this.props.deletePhoto(photo.id)}>
                      <div className="delete-txt">Delete</div>
                      <i className="material-icons delete-icon">delete_outline</i>
                    </button>
                  </div>
                  </div> : null }
                  </li>)}
              </div>
            </ul>
          </div>
      </div>
    )
  }
}



export default withRouter(Photo);
