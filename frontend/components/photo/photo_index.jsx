import React from 'react';
import Photo from './photo';

const PhotoIndex = ({photos}) => (
  <div>
    {photos.map(photo => <li key={photo.id}>{photo.title}<img src={photo.photoUrl}/></li>)}
  </div>
)

export default PhotoIndex
