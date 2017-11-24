import React from 'react';
import PhotoIndexItem from './photo_index_item';
import {chunk, flatten} from 'lodash';

class PhotoIndex extends React.Component {

  componentWillMount(){
    this.props.requestAllPhotos();
  }

  render() {
    let temp = chunk(this.props.photos, 4);
    return (
      <div>
        <h2 className="photo-text">My Photos</h2>
        <div className="row">
          {temp.map( (photo, idx) =>
            <PhotoIndexItem key={idx} photo={photo} />
          )}
        </div>

      </div>
    );
  }
}

export default PhotoIndex;
