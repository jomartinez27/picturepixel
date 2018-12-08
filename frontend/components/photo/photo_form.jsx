import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'
import { Modal, Button, Popover, Tooltip } from 'react-bootstrap'

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      photoFile: null,
      photoUrl: null,
      show: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  renderErrors() {
    const err = document.getElementById("photo-errors")
    if (this.props.errors.length > 0) {
      err.className = "render-photo-errors";
      return (
        <div className="photo-errors-whole">
        <div><span className="close-errors" onClick={() => err.className="photo-errors"}>&times;</span></div>
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
      );
    }
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
      .then(this.handleSpanModal())
      .then(this.setState({
        title: '',
        description: '',
        photoFile: null,
        photoUrl: null
      }))
    document.getElementById("file").value = ""
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

  handleShow() {
    this.setState({
      show: true
    })
  }

  handleClose() {
    this.setState({
      show:false
    })
  }

  render () {
    const preview = this.state.photoUrl ? <img className="prev-img" src={this.state.photoUrl} /> : <img className="prev-img" src={window.images.place} />;
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    return (
      <div>
        <Button onClick={this.handleShow}>Upload</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
      )
  }
}

export default withRouter(PhotoForm);
