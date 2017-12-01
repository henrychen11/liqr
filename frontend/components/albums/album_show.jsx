import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0,
    fitWidth: true
};

class AlbumShow extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
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
            options={masonryOptions}
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
            <Link to="/photos">
              <button className="album-form-button">Add Photos</button>
            </Link>
            <button onClick={() => this.props.destroyAlbum(this.props.albumId)
                .then(this.props.history.push('/albums'))}
                className="album-form-button">Delete Album</button>
          </div>
        </div>
      );
    }
}

export default AlbumShow;
