import React from 'react'
import PropTypes from 'prop-types'

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      photoFile: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
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
    const modal = document.getElementById('myModal');
    return () => modal.style.display = 'block';
  }

  handleSpanModal() {
    const modal = document.getElementById('myModal')
    return () => modal.style.display = "none";
  }

  render () {
    return (
      <div className="photo-form">
        <i id="myBtn" className="material-icons photo-form-icon" onClick={this.handleBtnModal()}>cloud_upload</i>
        <form id="myModal" className="modal" onClick={this.handleSubmit.bind(this)}>
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
              onChange={this.handleFile.bind(this)}/>

            <button className="photo-form-btn" onClick={this.handleSubmit}>Post a Pic</button>
          </div>
        </form>
      </div>
    )
  }
}

export default PhotoForm;
