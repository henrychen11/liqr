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
        <h1 className="page-header"> You currently have no albums </h1>
      );
    } else if (photos.length === 0){
      return (
        <div>
          <h1 className="page-header">This is the Album: {album.title}</h1>
          <h1 className="page-header">You currently no pictures in this album</h1>

            <button className="album-form-button"><a href="#/home">Add Photos</a></button>

        </div>
      );
    } else {

      return (
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
                {console.log(photo)}
                <Link to={`/photos/${photo.id}`}>
                  <Image publicId={photo.img_url} cloudName="liquidpineapple" />
                </Link>
                <div className="photo-caption-text">
                  <p>{photo.title}</p>
                  <p>By: {photo.author}</p>
                </div>
              </div>
            ))}
          </Masonry>
        </div>

      );
    }
  }
}

export default AlbumShow;
