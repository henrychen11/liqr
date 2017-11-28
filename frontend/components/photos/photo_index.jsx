import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';

class PhotoIndex extends React.Component {

  componentWillMount(){
    this.props.requestAllPhotos();
  }


  render() {

    const masonryOptions = {
      // fitWidth: true,
      // stagger: 100,
      // gutter: 3,
      transitionDuration: '0.3s' };

    const {photos} = this.props;
    return (
      <div>
        <h2 className="page-header">Explore</h2>
          <Masonry
            className={'my-gallery-class'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
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
