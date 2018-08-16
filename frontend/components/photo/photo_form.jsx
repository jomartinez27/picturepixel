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
      .then(this.handleSpanModal())
      .then(this.setState({
        title: '',
        description: '',
        photoFile: null,
        photoUrl: null
      }));
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

  handleBtnModal() {
    return () => {
      const modal = document.getElementById('my-modal');
      modal.style.display = 'block';
    }
  }

  handleSpanModal() {
    return () => {
      const modal = document.getElementById('my-modal')
      modal.style.display = "none";
    }
  }

  render () {
    const preview = this.state.photoUrl ? <img className="prev-img" src={this.state.photoUrl} /> : null;
    return (
      <div className="photo-form">
        <div className="upload-cloud" onClick={this.handleBtnModal()}>
        <i id="myBtn" className="material-icons cloud photo-form-icon" onClick={this.handleBtnModal()}>cloud_upload</i>
          <p>Upload</p>
        </div>

        <div id="my-modal" className="modal">
          <div className="modal-content">
            <div><span className="close" onClick={this.handleSpanModal()}>&times;</span></div>

            <div className="post-modal-content">
              <div className="post-modal-left">
                <div className="file-box">
                  <input type="file" name="file" id="file" className="inputfile" onChange={this.handleFile}/>
                  <label htmlFor="file">Choose a file</label>
                </div>
                <div className="prev-img-container">{preview}</div>
              </div>

              <div className="post-modal-right">
                <form onSubmit={this.handleSubmit}>
                  <div className="photo-title-outer">
                    <label className="photo-form-title"><h3>Title</h3>
                    <input className="photo-input"
                      type="text"value={this.state.title}
                      onChange={this.handleInput('title')}/>
                    </label>
                  </div>
                  <div className="photo-body-outer">
                    <label className="photo-form-body">
                      <h3>Description</h3>
                      <textarea
                        className="photo-input"
                        value={this.state.description}
                        onChange={this.handleInput('description')}>
                      </textarea>
                    </label>
                  </div>
                  <div className="form-upload-btn"><button className="photo-form-btn" onClick={this.handleSubmit}>Post a Pic</button></div>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default withRouter(PhotoForm);
