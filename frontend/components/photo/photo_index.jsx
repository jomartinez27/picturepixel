import React from 'react';
import Photo from './photo';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const PhotoIndex = ({photos}) => {
  return (
    <Grid>
      <Row>
        <Col>
          {photos.map(photo => <li key={photo.id}>
            <i className="material-icons profile-drop">account_circle</i>
            <p className="photo-title">{photo.title}</p>
            <Image src={photo.photoUrl} responsive/>
          </li>)}
        </Col>
      </Row>
    </Grid>
  )
}

export default PhotoIndex

// <div className="flow-photo">
//   <ul className="ul-photo-list">
//     <div className="photo-container">
//       {photos.map(photo => <li
//         className="photo-list"
//         key={photo.id}>
//         <div className="photo-header">
//           <div className="photo-profile-logo">
//             <i className="material-icons profile-drop">account_circle</i>
//             </div>
//           <p className="photo-title">{photo.title}</p>
//         </div>
//         <img className="photo" src={photo.photoUrl}/>
//         <div className="photo-footer">{photo.description}</div>
//       </li>)}
//     </div>
//   </ul>
// </div>
