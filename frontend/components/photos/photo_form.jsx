import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Modal from 'react-modal';
import { Image, Transformation } from 'cloudinary-react';
import { RingLoader } from 'react-spinners';

const CLOUDINARY_UPLOAD_PRESET = 'pb0smcqc';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/liquidpineapple/image/upload';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    }
};

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: [],
      photo: this.props.photo,
      modalIsOpen: false,
      loading: true
    };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelForm = this.cancelForm.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      photo: newProps.photo,
    });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.openModal();
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          photo: Object.assign({}, this.state.photo, {img_url: response.body.public_id })
        }, () => this.props.createPhoto(this.state.photo)
                  .then(this.closeModal)
                    .then(this.props.history.push('/home')));
      }
    });
  }
  // This is the standard submit data actions:
  update(field){
    return (event) => this.setState({
      photo: Object.assign({}, this.state.photo, { [field]: event.target.value })
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(event){
    event.preventDefault();
    this.handleImageUpload(this.state.uploadedFile);
  }

  cancelForm(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    return (
      (!this.state.photo) ? <div></div> :
      <div>
        <h1 className="page-header">Uplad a picture below:</h1>
        <div className="upload-container">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}
            className="drop-box"
            >
            <p className="drop-text">Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>

        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Edit Modal"
          >
            <img className="photo-preview" src={this.state.uploadedFile.preview} />

              <form className="modal-form" onSubmit={this.handleSubmit}>
                <input
                  className="modal-input"
                  type="text"
                  onChange={this.update("title")}
                  placeholder="Title"
                />
                <br />
                <textarea
                  className="modal-input"
                  onChange={this.update("description")}
                  placeholder="Description"
                />
                <br />
                <div className="modal-button-container-form">
                  <input className="modal-button-form" type="submit" />
                  <button className="modal-button-form" onClick={this.cancelForm}>Cancel</button>
                </div>
              </form>

        </Modal>
      </div>
  );
    }
}

export default Upload;

// <Image publicId={this.state.photo.img_url} cloudName="liquidpineapple" >
//   <Transformation height="300" crop="scale" />
// </Image>
