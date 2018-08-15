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
    if (this.state.photos.length === 0) {
      return "loading"
    }
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
                  <img className="photo" src={photo.photoUrl}/>
                  <h2 className="photo-footer">{photo.description}</h2>
                    <div className="delete-container">
                      <button onClick={() => this.props.deletePhoto(photo.id)}><i className="material-icons">delete_outline</i></button>
                    </div>
                  </li>)}
              </div>
            </ul>
          </div>
      </div>
    )
  }
}



export default withRouter(Photo);
