import React from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {

  componentWillMount(){
    this.props.requestAlbum(this.props.albumId);

  }

  componentWillReceiveProps(newProps){
    if (this.props.albumId !== newProps.match.params.albumId) {
      this.props.requestAlbum(newProps.match.params.albumId);
    }
  }



  render(){
    const {album, photos} = this.props;
    // console.log(photos);

    if (!album) {
      return (
        <h1> You currently have no albums </h1>
      );
    } else {
      return (
        <div>
          <h1>This is the Album: {album.title}</h1>
          {
            photos.map( (photo) => (
            <Link key={photo.id} to={`/photos/${photo.id}`}>
              <Image className="photo" key={photo.id} publicId={photo.img_url} cloudName="liquidpineapple" />
            </Link>
          ))}
        </div>

      );
    }
  }
}

export default AlbumShow;
