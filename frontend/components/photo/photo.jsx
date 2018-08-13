import React from 'react'

// import Form from './form';
import PhotoIndex from './photo_index';

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
        <PhotoIndex photos={this.state.photos} />
      </div>
    )
  }
}



export default Photo;
