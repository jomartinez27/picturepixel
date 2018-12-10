import React from 'react';
import { Redirect } from 'react-router-dom';
import UserNav from './user_nav_container';
import EditFormContainer from '../photo/edit_photo_container';
import { Image } from 'react-bootstrap';


class User extends React.Component {
  constructor(props) {
    super(props);

    this.props.photos.map(photo => (
      this.state = {
        title: photo.title,
        description: photo.description
      }
    ))
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
      <div className="profile">
        <div className="user-nav-container">
          <UserNav />
        </div>
        <div className="profile-body">
          <div className="profile-photos">
            <div className="grid-container">
        {this.props.photos.map(photo => photo.photographer_id === parseInt(this.props.match.params.userId) ?
          <li
            className="photo-list photo-list-prof"
            key={photo.id}>
            <div className="outer-photo-container">
            <div className="photo-header">
              <div className="photo-profile-logo">
                <i className="material-icons profile-drop">account_circle</i>
                <p className="photo-username">{this.props.user.username}</p>
              </div>
            </div>
            <div className="single-photo-container"><Image responsive key={photo.id} className="photo user-photo-prof" src={photo.photoUrl}/></div>
            <div className="photo-footer">
              <p className="photo-title">{photo.title}</p>
              <div className="photo-description">{photo.description}</div>
            </div>
            <div id="delete-modal" className="delete-modal">
              <div className="delete-modal-content">
              <h3>Are you sure you want to delete?</h3>
                <div className="delete-buttons">
                  <button className="confirm-yes" onClick={() => this.props.deletePhoto(photo.id)}>Yes</button>
                  <button className="confirm-no" onClick={this.removeModal()}>No</button>
                  </div>
                </div>
              </div>
            { photo.photographer_id === this.props.currentUser.id ? <div className="delete-container">
              <div><button className="delete-btn" onClick={this.displayModal()}>
                <div className="delete-txt">Delete</div>
                <i className="material-icons delete-icon">delete_outline</i>
              </button>
            </div>

            </div> : null }
          </div>
            </li>
           : null)}
         </div>
       </div>
       </div>
      </div>
    )
  }
}

export default User;








//
// <div className="profile">
//   <div className="user-nav-container">
//     <UserNav />
//   </div>
//   <div className="profile-body">
//     <div className="profile-photos">
//       <div className="grid-container">
//   {this.props.photos.map(photo => photo.photographer_id === parseInt(this.props.match.params.userId) ?
//     <li
//       className="photo-list"
//       key={photo.id}>
//       <div className="photo-header">
//         <div className="photo-profile-logo">
//           <i className="material-icons profile-drop">account_circle</i>
//           <p className="photo-username">{this.props.user.username}</p>
//         </div>
//       </div>
//       <div className="single-photo-container"><img key={photo.id} className="photo" src={photo.photoUrl}/></div>
//       <div className="photo-footer">
//         <p className="photo-title">{photo.title}</p>
//         <div className="photo-description">{photo.description}</div>
//       </div>
//       { photo.photographer_id === this.props.currentUser.id ? <div className="delete-container">
//         <div><button className="delete-btn" onClick={() => this.props.deletePhoto(photo.id)}>
//           <div className="delete-txt">Delete</div>
//           <i className="material-icons delete-icon">delete_outline</i>
//         </button>
//       </div>
//
//       </div> : null }
//       </li>
//      : null)}
//    </div>
//  </div>
//  </div>
// </div>
