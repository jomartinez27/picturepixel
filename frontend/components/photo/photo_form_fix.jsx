<div className="photo-form">
  <i className="material-icons photo-form-icon">cloud_upload</i>
  <form className="modal" onClick={this.handleSubmit.bind(this)}>
    <div className="modal-content">
      <span className="close">&times;</span>

    <label className="photo-title">Title
      <input
        className="photo-input"
        type="text"
        value={this.state.title}
        onChange={this.handleInput('title')}/>
    </label>
    </div>
  </form>
</div>
