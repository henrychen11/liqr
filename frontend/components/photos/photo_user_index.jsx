import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';
class PhotoUserIndex extends React.Component {

  componentWillMount(){
    // debugger
    this.props.requestUserPhotos(this.props.currentUser.id);
  }

  render() {
    const {photos} = this.props;
    const masonryOptions = {
      // fitWidth: true,
      // stagger: 100,
      // gutter: 3,
      transitionDuration: '0.3s' };
    return (
      <div>
        <h2 className="page-header">My Pictures</h2>
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

export default PhotoUserIndex;
