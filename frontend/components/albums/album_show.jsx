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
    } else if (photos.length === 0){
      return (
        <div>
          <h1>This is the Album: {album.title}</h1>
          <h2>You currently no pictures in this album</h2>
          <button className="album-form-button"><a href="#/photos">Add Photos</a></button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>This is the Album: {album.title}</h1>
          <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
            {
              photos.map( (photo) => (
                <div key={photo.id} className="grid-item">
                  <Link to={`/photos/${photo.id}`}>
                    <Image className="photo" key={photo.id} publicId={photo.img_url} cloudName="liquidpineapple" />
                  </Link>
                </div>
              ))}
          </div>
        </div>

      );
    }
  }
}

export default AlbumShow;
