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
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  handleInput(field) {
    return e => {
      this.setState({[field]: e.currentTarget})
    }
  }

  handleModal() {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById("myBtn");
    const span = document.getElementByClassName("close")[0];
  }

  render () {
    return (
      <div className="photo-form">
        <i id="myBtn" className="material-icons photo-form-icon">cloud_upload</i>
        <form id="myModal" className="modal" onClick={this.handleSubmit.bind(this)}>
          <div className="modal-content">
            <span className="close">&times;</span>

          <label className="photo-title">Title
            <input
              className="photo-input"
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}/>
          </label>

          <label className="photo-body">Description
            <textarea
              className="photo-input"
              value={this.state.description}
              onChange={this.handleInput('description')}>
            </textarea>
          </label>
          </div>
        </form>
      </div>
    )
  }
}

export default PhotoForm;
