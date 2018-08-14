import React from 'react';
import Photo from './photo';

const PhotoIndex = ({photos}) => (
  <div className="flow-photo">
  <div className="photo-container">
    {photos.map(photo => <li
      className="photo-list"
      key={photo.id}>
      <div className="photo-header">
        <i className="material-icons profile-drop">account_circle</i>
        <p className="photo-title">{photo.title}</p>
      </div>
      <img className="photo" src={photo.photoUrl}/>
      <h2 className="photo-footer">{photo.description}</h2>
    </li>)}
  </div>
</div>
)

export default PhotoIndex
