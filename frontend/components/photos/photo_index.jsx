import React from 'react';
import PhotoIndexItem from './photo_index_item';
import {chunk, flatten} from 'lodash';

class PhotoIndex extends React.Component {

  componentWillMount(){
    this.props.requestAllPhotos();
  }

  componentDidMount(){
    this.props.requestAllPhotos();
  }

  render() {
    // let temp = chunk(this.props.photos, 4);
    const {photos} = this.props;
    return (
      <div>
        <h2 className="photo-header">My Photos</h2>
        <div className="photo-grid">
          {
            photos.map( (photo, idx) =>
            <PhotoIndexItem   key={idx} photo={photo} />
          )}
        </div>

      </div>
    );
  }
}

export default PhotoIndex;
