import React from 'react';
import { Redirect } from 'react-router-dom';
import UserNav from './user_nav_container';
import EditFormContainer from '../photo/edit_photo_container';
import { Modal, Image, Jumbotron } from 'react-bootstrap';


class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      target: "",
      title: ""
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose(e) {
    this.setState({show: false, target: "", title: ""})
  }

  handleShow(e) {
    this.setState({show: true, target: e.target, title: e.target.title})
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

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleUpdate() {
    return (
      <div className="edit-form-container">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <label className="photo-form-title"><h3>Title</h3>
          <input className="photo-input"
            type="text" value={this.props.photos[this.props.match.params.userId]}
            onChange={this.update('title')}/>
          </label>
        </form>
      </div>
    )
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
                  <Image key={photo.id} responsive src={photo.photoUrl} style={{width: 300, height: 300}} onClick={this.handleShow} title={photo.title}/>
                </div>
              </li>
              : null)}
          </div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.state.target.src} responsive/>
            </Modal.Body>
          </Modal>
      </div>
    )
  }
}

export default User;
