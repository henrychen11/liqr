import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoUserIndex extends React.Component {

  componentWillMount(){
    // debugger
    this.props.requestUserPhotos(this.props.currentUser.id);
  }

  render() {
    const {photos} = this.props;
    return (
      <div>
        <h2 className="photo-header">My Pictures</h2>
        <div className="photo-grid">
          {
            photos.map( (photo, idx) =>
            <PhotoIndexItem  key={idx} photo={photo} />
          )}
        </div>

      </div>
    );
  }
}

export default PhotoUserIndex;
