import React from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  // fitWidth: true,
  stagger: 100,
  // gutter: 3,
  transitionDuration: '0.2s' };

class AlbumShow extends React.Component {

  componentWillMount(){
    this.props.requestAlbum(this.props.albumId);
    // debugger
  }

  componentWillReceiveProps(newProps){
    if (this.props.albumId !== newProps.match.params.albumId) {
      this.props.requestAlbum(this.props.albumId);
    }
  }

  render(){
    const {album, photos} = this.props;


    let display;

    if (!album) {
      display = <div className="page-header"> You currently have no albums </div>;
      }
    else if (photos === undefined){
      display =
        <div>
          <h1 className="page-header">This is the Album: {album.title}</h1>
          <h1 className="page-header">You currently no pictures in this album</h1>
          <button className="album-form-button"><a href="#/home">Add Photos</a></button>
        </div>;
    } else {
      display =
        <div>
          <h1 className="page-header">{album.title}</h1>
          <Masonry
            className={'my-gallery-class'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            >
            {photos.map( (photo) => (
              <div  key={photo.id} className="image-element-class">

                <Link to={`/photos/${photo.id}`}>
                  <Image publicId={photo.img_url} cloudName="liquidpineapple" />
                </Link>
                <div className="photo-caption-text">
                  <p>{photo.title}</p>
                </div>
              </div>
            ))}
          </Masonry>
        </div>;

      return (
        <div>
          {display}
        </div>
      );
    }
  }
}

export default AlbumShow;
