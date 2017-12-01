import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';
import { RingLoader } from 'react-spinners';

class PhotoIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.props.requestAllPhotos().then( () => this.setState({ loading: false }));
  }

  render() {
    const {photos} = this.props;
      return (
        <div>
          <div className='loading'>
            <RingLoader
              size={200}
              color={'#19B5FE'}
              loading={this.state.loading}
              />
          </div>
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
