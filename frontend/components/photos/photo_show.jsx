import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import Modal from 'react-modal';

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

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      photo: this.props.photo
    };
    console.log("props", props);
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //
  componentWillMount(){
    this.props.requestPhoto(this.props.photoId);
    this.props.requestAlbums(this.props.currentUser.id);
    // debugger
  }

  componentWillReceiveProps(newProps) {
  if (this.props.match.params.photoId !== newProps.match.params.photoId) {
    this.props.requestPhoto(newProps.match.params.photoId);
    this.props.requestAlbums(this.props.currentUser.id);
    }
  }

  handleDelete(event){
    event.preventDefault();
    if(confirm("Are you sure you want to delete this picture?")){
      this.props.destroyPhoto(this.props.photoId)
        .then( () => this.props.history.push('/home'));
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.props.editPhoto(this.state.photo.id)
      .then( (response) => console.log(response));
      // .then( (response) => this.props.history.push(`/photos/${response.payload.photo.id}`));
  }

  update(field){
    return (event) => this.setState({
      photo: Object.assign({}, this.state.photo, { [field]: event.target.value })
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { photo, albums, currentUser, userAlbums } = this.props;


    return (
      (!photo || !albums || !userAlbums) ? <div></div> :
      <div className="photo-show-container" >
        <div className="photo-show-image-container">
          <Image key={ photo.id } className="photo-show-image" publicId={ photo.img_url } cloudName="liquidpineapple" />
        </div>

      <div className="photo-show-info-container">
        <div className="photo-show-info-left">
          <div className="photo-show-info">
            <h1>{photo.title}</h1>
            <h2>{photo.description}</h2>
            <h1>Posted by: {photo.author}</h1>
            <br/>
            <h1>Currently in the following albums:</h1>
              { (albums === undefined ) ? "" :
                <ul>
                  { albums.map(album => (
                    <li key={album.id}>{album.title}</li>
                  )
                )}
              </ul>
              }
            <br />
            <h1>Add to albums</h1>
            <ul>
              { (userAlbums.length === 0) ? <div></div> :
                userAlbums.map(album => (
                  <li key={album.id}>{album.title}</li>
                ))
              }
            </ul>
            <br/>
            <h1 className="photo-info-header">Tags</h1>
            <h2>Tag 1</h2>
            <h2>Tag 2</h2>
            <h2>Tag 3</h2>
            <button>Add Tag</button>
          </div>
        </div>

        <div className="photo-show-info-right">
          <div className="photo-show-info">
            <button onClick={this.openModal}>Edit Picture</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Edit Modal"
            >
              <form className="modal-form" onSubmit={this.handleSubmit}>
                <label className="modal-label">Picture Title:</label>
                  <input
                    className="modal-input"
                    placeholder="Enter Title"
                    type="text"
                    onChange={this.update('title')}
                    value={this.state.photo.title} />
                <label className="modal-label">Picture Description:</label>
                  <textarea
                    className="modal-input"
                    placeholder="Enter Description"
                    value={this.state.photo.description}
                    onChange={this.update('description')} />
                <div className="modal-button-container">
                  <input
                    className="modal-button"

                    type="submit"
                    value="Save" />
                  <button className="modal-button" onClick={this.closeModal}>Cancel</button>
                </div>
              </form>
            </Modal>



            <button onClick={this.handleDelete}>Delete Picture</button>
            <h1 className="photo-info-header">Comments</h1>
            <h2 className="photo-comment-item">Comment 1</h2>
            <h2 className="photo-comment-item">Comment 2</h2>
            <h2 className="photo-comment-item">Comment 3</h2>


            <textarea className="photo-comment-new" />
            <button>Add Comment</button>

          </div>
        </div>
      </div>

      <div>

      </div>

      </div>
    );

  }
}

export default PhotoShow;
