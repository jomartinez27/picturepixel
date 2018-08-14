import React from 'react';
import Photo from './photo';

const PhotoIndex = ({photos}) => (
  <div className="flow-photo">
  <div className="photo-container">
    {photos.map(photo => <li
      className="photo-list"
      key={photo.id}>
      <h2 className="photo-title">{photo.title}</h2>
      <img className="photo" src={photo.photoUrl}/>
      <h2 className="photo-footer">{photo.description}</h2>
    </li>)}
  </div>
</div>
)

export default PhotoIndex
