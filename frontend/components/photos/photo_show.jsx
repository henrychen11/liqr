import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
class PhotoShow extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
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
      this.props.destroyPhoto(this.props.photo.id)
        .then( () => this.props.history.push('/photos') );

    }

  }


  render() {
    const { photo, albums, currentUser, userAlbums } = this.props;
    console.log(this.props.userAlbums);
    return (

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
                <div>
                  { albums.map(album => (
                    album.title
                  )
                )}
                </div>
              }
            <br />
            <h1>Add to albums</h1>
            <ul>
              { (userAlbums.length === 0) ? "" :
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
          </div>
        </div>

        <div className="photo-show-info-right">
          <div className="photo-show-info">
            <button>Edit Picture</button>
            <button onClick={this.handleDelete}>Delete Picture</button>
            <h1 className="photo-info-header">Comments</h1>
            <h2>Comment 1</h2>
            <h2>Comment 2</h2>
            <h2>Comment 3</h2>
            <br/>
            <h1 className="photo-info-header">Add a comment:</h1>
            <textarea />
            <button>Add Comment</button>

          </div>
        </div>
      </div>

      </div>
    );

  }
}

export default PhotoShow;
