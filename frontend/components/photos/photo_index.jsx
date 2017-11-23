import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPhotos();
    debugger;
  }

  render() {
    return (
      <div>
      <h2>All Photots</h2>
        { this.props.photos.map( (photo) => 
          <PhotoIndexItem key={photo.id} photo={photo} />
        )}
      </div>
    );
  }
}

export default PhotoIndex;
