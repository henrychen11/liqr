import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

class AlbumShow extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestAlbum(this.props.albumId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.albumId !== newProps.match.params.albumId) {
      this.props.requestAlbum(this.props.albumId);
    }
    this.setState({album: newProps.album});
  }

  render(){
    const { photos } = this.props;
    return (
        (!photos) ? "" :
        <div>
          <h1 className="page-header">{this.props.album[this.props.albumId].title}</h1>
          <Masonry
            className={'my-gallery-class'}
            elementType={'ul'}
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
          <div className="album-form-button-container">
            <button href="#/home" className="album-form-button">Add Photos</button>
            <button className="album-form-button">Delete Album</button>
          </div>
        </div>
      );
    }
}

export default AlbumShow;
