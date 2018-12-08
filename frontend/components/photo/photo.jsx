import React from 'react'

import PhotoIndex from './photo_index';
import NavBar from '../greeting/nav_bar';
import { withRouter, Link } from 'react-router-dom'
import EditPhotoContainer from './edit_photo_container';
import { Grid, Row, Col, Image, Navbar, Nav, NavItem } from 'react-bootstrap';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: this.props.photos,
      users: this.props.users
    }

  }

  componentDidMount() {
    this.props.fetchPhotos()
    this.props.fetchUsers()
  }

  componentWillReceiveProps(newProps){
    if (newProps.photos.length !== this.state.photos.length) {
      this.setState({photos: newProps.photos})
    }
  }

  displayModal() {
    return () => {
      const modal = document.getElementById("delete-modal")
      modal.style.display = "block"
    }
  }

  removeModal() {
    return () => {
      const modal = document.getElementById("delete-modal");
      modal.style.display = "none"
    }
  }

  render () {
    console.log(this.props)
    if (!this.props.users) {
      return null;
    }
    return (
      <div>
        <div>
          <NavBar currentUser={this.props.currentUser}/>
        </div>
        <Grid>
          <Row>
            <Col xs={12}>
              {this.state.photos.reverse().map(photo => <li key={photo.id}>
                <div className="container photo-container">
                  <div className="photo-header">
                    <div className="photo-profile-logo">
                      <i className="material-icons profile-drop">account_circle</i>
                      <Link className="user-link" to={`/users/${this.props.users[photo.photographer_id].id}`}>
                        <p className="photo-username">{this.props.users[photo.photographer_id].username}</p>
                      </Link>
                    </div>
                  </div>
                  <Link to={`/users/${this.props.users[photo.photographer_id].id}`}>
                    <Image src={photo.photoUrl} responsive />
                  </Link>
                  <div className="photo-footer">
                    <p className="photo-title">{photo.title}</p>
                    {photo.description}
                  </div>
                </div>
              </li>)}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}



export default withRouter(Photo);

// <div className="flow-photo">
// <ul className="ul-photo-list">
// <div className="photo-container">
// {this.state.photos.map(photo => <li
// className="photo-list"
// key={photo.id}>
// <div className="photo-header">
//   <div className="photo-profile-logo">
//     <i className="material-icons profile-drop">account_circle</i>
//     <Link className="user-link" to={`/users/${this.props.users[photo.photographer_id].id}`}>
//       <p className="photo-username">{this.props.users[photo.photographer_id].username}</p>
//     </Link>
//   </div>
// </div>
// <div className="single-photo-container"><img key={photo.id} className="photo" src={photo.photoUrl}/></div>
// <div className="photo-footer">
//   <p className="photo-title">{photo.title}</p>
//   {photo.description}
// </div>
// <div id="delete-modal" className="delete-modal">
//   <div className="delete-modal-content">
//     <h3>Are you sure you want to delete?</h3>
//     <div className="delete-buttons">
//     <button className="confirm-yes" onClick={() => this.props.deletePhoto(photo.id)}>Yes</button>
//     <button className="confirm-no" onClick={this.removeModal()}>No</button>
//     </div>
//   </div>
// </div>
// { photo.photographer_id === this.props.currentUser.id ? <div className="delete-container">
//   <div><button className="delete-btn" onClick={this.displayModal()}>
//     <div className="delete-txt">Delete</div>
//     <i className="material-icons delete-icon">delete_outline</i>
//   </button>
// </div>
// </div> : null }
// </li>)}
// </div>
// </ul>
// </div>
