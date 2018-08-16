import React from 'react';
import { Redirect } from 'react-router-dom';
import UserNav from './user_nav';


class User extends React.Component {
  constructor(props) {
    super(props);
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


  render () {
    if (this.props.photos.length === 0) {
      return (
        <div>
          <h1>No pics</h1>
        </div>
      )
    }
    return (
      <div className="profile">
        <UserNav />
        {this.props.photos.map(photo => photo.photographer_id === parseInt(this.props.match.params.userId) ?
          <li
            className="photo-list profile-photo-list"
            key={photo.id}>
            <div className="photo-header">
              <div className="photo-profile-logo">
                <i className="material-icons profile-drop">account_circle</i>
              </div>
            </div>
            <div className="single-photo-container"><img key={photo.id} className="photo" src={photo.photoUrl}/></div>
            <div className="photo-footer">
              <p className="photo-title">{photo.title}</p>
              {photo.description}
            </div>
            <div className="delete-container">
              <div><button className="delete-btn" onClick={() => this.props.deletePhoto(photo.id)}>
                <div className="delete-txt">Delete</div>
                <i className="material-icons delete-icon">delete_outline</i>
              </button>
            </div>
            </div>
            </li>
           : null)}
      </div>
    )
  }
}

export default User;
