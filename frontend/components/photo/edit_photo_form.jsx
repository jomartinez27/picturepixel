import React from 'react'
import PropTypes from 'prop-types'

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.photo.title || '',
      description: this.props.photo.description || ''
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePhoto(this.state)
  }

  render () {
    return (
      <div className="edit-form-container">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <label className="photo-form-title"><h3>Title</h3>
          <input className="photo-input"
            type="text" value={this.state.title}
            onChange={this.update('title')}/>
          </label>
        </form>
      </div>
    )
  }
}

export default EditForm;
