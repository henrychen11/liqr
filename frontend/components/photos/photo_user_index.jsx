import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';

class PhotoUserIndex extends React.Component {

  componentWillMount(){
    this.props.requestUserPhotos(this.props.currentUser.id);
  }

  render() {
    const {photos} = this.props;

      return (
        <div>
          { (photos.length === 0) ? <div className="loader"></div> :
            <div>
              <h2 className="page-header">My Pictures</h2>
              <Masonry
                className={'my-gallery-class'}
                elementType={'ul'}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                >
                {
                  photos.map( (photo, idx) =>
                  <PhotoIndexItem  key={idx} photo={photo} />
                )}
              </Masonry>
            </div>
          }
        </div>
      );
    }
  }

export default PhotoUserIndex;
