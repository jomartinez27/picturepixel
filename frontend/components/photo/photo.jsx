import React from 'react'

import PhotoIndex from './photo_index';
import NavBar from '../greeting/nav_bar';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }


  componentDidMount() {
    this.props.fetchPhotos();
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
