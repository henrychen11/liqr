import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Image, Transformation } from 'cloudinary-react';
const CLOUDINARY_UPLOAD_PRESET = 'pb0smcqc';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/liquidpineapple/image/upload';

class Upload extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      photo: props.photo
    };

    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  componentWillMount() {
    if (this.props.formType === 'edit') {
        this.props.requestPhoto(this.props.match.params.photoId);
      }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      photo: newProps.photo
    });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      // console.log(response);
      if (response.body.secure_url !== '') {
        // console.log("before", this.state, this.props);
        this.setState({
          photo: { img_url: /liquidpineapple.*/.exec(response.body.secure_url)[0] }        });
      }
      // console.log("after", this.state, this.props);
    });
  }
  // This is the standard submit data actions:
  update(field){
    return (event) => this.setState({
      photo: Object.assign({}, this.state.photo, { [field]: event.currentTarget.value })
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.action(this.state.photo)
      .then( (response) => console.log(response));
      // .then( (response) => this.props.history.push(`/photos/${response.payload.photo.id}`));
  }

  cancelForm(event) {
    event.preventDefault();
    this.props.history.goBack();
  }


  render() {
    const { photo, formType } = this.props;

    if (formType === 'new' && photo.img_url === ""){
        return (
          <div className="upload">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop}>
              <p className="drop-text">Drop an image or click to select a file to upload.</p>
            </Dropzone>
          </div>
        );
      } else {
        return (
          <div className="">
          { this.state.photo.img_url === '' ? null :
            <div className="">
              <Image publicId={this.state.photo.img_url} cloudName="liquidpineapple" >
                <Transformation height="500" crop="scale" />
              </Image>
            </div>
          }
        <div className="">
          <form className="" onSubmit={this.handleSubmit}>
            <input type=""
              onChange={this.update("title")}
              placeholder="Title"
              value={photo.title}
            />
            <br />
            <textarea
              onChange={this.update("description")}
              placeholder="Description"
              value={photo.description}
            />
            <br />

            <div className="form-buttons">
              <input
                type="submit"
                value={formType === 'new' ? "Upload" : "Edit" }
              />
            <button className="" onClick={this.cancelForm}>Cancel</button>
            </div>
          </form>

        </div>
      </div>
      );
      }
    }
}

export default Upload;
