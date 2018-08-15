import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      photoFile: null,
      photoUrl: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);

    if (this.state.photoFile) {
      formData.append('photo[photo]', this.state.photoFile)
    }

    this.props.createPhoto(formData)
      .then(this.handleSpanModal());

    this.setState({title: '', description: '', photoUrl: null, photoFile: null})
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleInput(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleBtnModal() {
    return () => {
      const modal = document.getElementById('my-Modal');
      modal.style.display = 'block';
    }
  }

  handleSpanModal() {
    return () => {
      const modal = document.getElementById('my-Modal')
      modal.style.display = "none";
    }
  }

  render () {
    return (
      <div className="photo-form">
        <i id="myBtn" className="material-icons cloud photo-form-icon" onClick={this.handleBtnModal()}>cloud_upload</i>
        <form id="my-Modal" className="modal" onSubmit={this.handleSubmit}>
          <div className="modal-content">
            <span className="close" onClick={this.handleSpanModal()}>&times;</span>

          <label className="photo-form-title">Title
            <input
              className="photo-input"
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}/>
          </label>

          <label className="photo-form-body">Description
            <textarea
              className="photo-input"
              value={this.state.description}
              onChange={this.handleInput('description')}>
            </textarea>
          </label>

            <input
              type="file"
              onChange={this.handleFile}/>

            <button className="photo-form-btn" onClick={this.handleSubmit}>Post a Pic</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(PhotoForm);
