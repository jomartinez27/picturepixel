import React from 'react'

import PhotoForm from './photo_form';
import PhotoIndex from './photo_index';
import NavBar from '../greeting/nav_bar';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }

    this.fetchPhotos = this.fetchPhotos.bind(this);
  }

  fetchPhotos () {
    $.ajax({
      url: 'api/photos'
    }).then(photos => {
      this.setState({photos})
    })
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  render () {
    return (
      <div>
        <NavBar />
        <PhotoIndex photos={this.state.photos} />
      </div>
    )
  }
}



export default Photo;
