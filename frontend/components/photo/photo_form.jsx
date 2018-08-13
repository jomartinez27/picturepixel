import React from 'react'
import PropTypes from 'prop-types'

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
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
      <form>
        <label>Title
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleInput('title')}/>
        </label>

        
      </form>
    )
  }
}

export default PhotoForm;
