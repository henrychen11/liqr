import React from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

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

    const masonryOptions = {
      // fitWidth: true,
      // stagger: 100,
      // gutter: 3,
      transitionDuration: '0.3s' };


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
          <h1>{album.title}</h1>
        <div className="masonry">
          <Masonry
            className={'my-gallery-class'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            >
            {photos.map( (photo) => (
              <Link to={`/photos/${photo.id}`}>
                <Image className="image-element-class" key={photo.id} publicId={photo.img_url} cloudName="liquidpineapple" />
              </Link>
            ))}
          </Masonry>
        </div>
      </div>
      );
    }
  }
}

export default AlbumShow;
