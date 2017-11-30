import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';

class PhotoIndex extends React.Component {

  componentWillMount(){
    this.props.requestAllPhotos();
  }

  render() {
    const {photos} = this.props;
    return (
      <div>
        <h2 className="page-header">Explore</h2>
          <Masonry
            className={'my-gallery-class'}
            >
              {
                photos.map( (photo, idx) =>
                <PhotoIndexItem  key={idx} photo={photo} />
              )}
          </Masonry>
      </div>
    );
  }
}

export default PhotoIndex;
