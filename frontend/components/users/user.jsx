import React from 'react';
import { Redirect } from 'react-router-dom';
import UserNav from './user_nav_container';
import EditFormContainer from '../photo/edit_photo_container';
import { Modal, Image, Jumbotron, Button } from 'react-bootstrap';


class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      target: "",
      title: "",
      show2: false,
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this)
  }

  handleClose() {
    console.log(parseInt(this.state.target.accessKey) === 8);
    this.setState({show: false, target: "", title: "", show2:false})
  }

  handleClose2() {
    this.setState({show2:false})
  }

  handleShow(e) {
    this.setState({show: true, target: e.target, title: e.target.title})
  }

  handleShow2() {
    this.setState({show2: true})
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchPhotos();
    this.props.fetchUsers();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.fetchUser(newProps.match.params.userId)
    }
  }

    displayModal() {
    return () => {
      this.setState({show: false})
      const modal = document.getElementById("delete-modal")
      modal.style.display = "block"
    }
  }

  deletePhoto() {
    return this.props.deletePhoto(parseInt(this.state.target.accessKey)).then(() => {
      this.handleClose()
    })
  }

  removeModal() {
    return () => {
      const modal = document.getElementById("delete-modal");
      modal.style.display = "none"
    }
  }

  render () {
    if (this.props.photos.length === 0) {
      return (
        <div>
          <UserNav />
        </div>
      )
    }

    return (
      <div>
        <div><UserNav /></div>
          <div className="user-photo-container">
            {this.props.photos.map(photo => photo.photographer_id === parseInt(this.props.match.params.userId) ?
              <li key={photo.id}>
                <div className="single-photo-container">
                  <Image responsive src={photo.photoUrl}
                    style={{width: 300, height: 300}}
                    onClick={this.handleShow}
                    title={photo.title}
                    id={photo.photographer_id}
                    accessKey={photo.id}
                    />
                </div>
              </li>
              : null)}
          </div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{textAlign: 'center'}}>{this.state.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.state.target.src} responsive/>
            </Modal.Body>
            <Modal.Footer>
              {parseInt(this.state.target.id) === this.props.currentUser.id ?
                <Button onClick={this.handleShow2}>Delete</Button> : null
              }
            </Modal.Footer>
          </Modal>
          <Modal show={this.state.show2} onHide={this.handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure you want to delete?</Modal.Title>
              <Modal.Body>
                <Button onClick={this.deletePhoto}>Yes</Button>
              </Modal.Body>
            </Modal.Header>
          </Modal>
      </div>
    )
  }
}

export default User;
