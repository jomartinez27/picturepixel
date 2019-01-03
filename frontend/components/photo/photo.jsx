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

  displayPhoto() {
    return (
      this.state.photos.map(photo => <li key={photo.id}>
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
      </li>)
    )
  }

  render () {
    if (!this.props.users || !this.state.photos) {
      return null;
    }
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <Grid className="photo-index-container">
          <Row>
            <Col xs={12} className="phot-index-row">
              {this.displayPhoto()}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}



export default withRouter(Photo);
