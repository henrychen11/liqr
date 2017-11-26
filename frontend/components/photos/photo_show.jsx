import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
class PhotoShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestPhoto(this.props.photoId);
    this.props.requestAlbums(this.props.currentUser.id);
  }

  componentWillReceiveProps(newProps) {
  if (this.props.match.params.photoId !== newProps.match.params.photoId) {
    this.props.requestPhoto(newProps.match.params.photoId);
    this.props.requestAlbums(this.props.currentUser.id);
    }
  }
  render() {
    const { photo, albums, currentUser } = this.props;
    
    let albumList = [];
    let albumCount = 0;
    if (this.props.photo.albumIds.length > 0) {
      albumListItems = photo.albumIds.map(id => {
          return (
            <Link key={id} to={`/albums/${id}`}>
              <div className="album-list-item">
                <Image publicId={albums[id].cover_photo_url} cloudName="shuttr" >
                  <Transformation width="100" height="100" crop="thumb" />
                </Image>
                {albums[id].title}
              </div>
            </Link>
          );
        }
      );
    }
    return (
      <div className="photo-show-container" >
        <div className="photo-show-image-container">
          <Image key={this.props.photo.id} className="photo-show-image" publicId={this.props.photo.img_url} cloudName="liquidpineapple" />
        </div>

      <div className="photo-show-info-container">
        <div className="photo-show-info-left">
          <div className="photo-show-info">
            <h1>{this.props.photo.title}</h1>
            <h2>{this.props.photo.description}</h2>
            <h1>Posted by: {this.props.photo.author}</h1>
            <br/>
            <h1>Currently in the following albums:</h1>
                {this.props.photo.albums.map( (album) =>
                  <h2>{album.title}</h2>
                )}
            <br/>
            <h1>Tags</h1>
            <h2>Tag 1</h2>
            <h2>Tag 2</h2>
            <h2>Tag 3</h2>
          </div>
        </div>

        <div className="photo-show-info-right">
          <div className="photo-show-info">
            <h1>Comments</h1>
            <h2>Comment 1</h2>
            <h2>Comment 2</h2>
            <h2>Comment 3</h2>
            <br/>
            <h1>Add a comment:</h1>
            <textarea />
          </div>
        </div>
      </div>

      </div>
    );

  }
}

export default PhotoShow;
