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

  render () {
    return (
      <div className="photo-form">
        <i class="material-icons photo-form-icon">cloud_upload
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label className="photo-title">Title
          <input
            className="photo-input"
            type="text"
            value={this.state.title}
            onChange={this.handleInput('title')}/>
        </label>

        <label className="photo-description">Description:
          <textarea
            className="photo-input"
            value={this.state.description}
            onChange={this.handleInput('description')}>
          </textarea>
        </label>

        <button className="photo-form-btn" onClick={this.handleSubmit}>Submit</button>
      </form>
    </i>
    </div>
    )
  }
}

export default PhotoForm;
