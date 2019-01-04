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
