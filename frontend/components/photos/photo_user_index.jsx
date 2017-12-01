import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';
import { RingLoader } from 'react-spinners';

const masonryOptions = {
    transitionDuration: 0,
    fitWidth: true
};

class PhotoUserIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }


  componentWillMount(){
    this.props.requestUserPhotos(this.props.currentUser.id).then( () => this.setState({ loading: false }));
  }

  render() {
    const {photos} = this.props;

      return (
              <div>
                <div className='loading'>
                  <RingLoader
                    size={150}
                    color={'#19B5FE'}
                    loading={this.state.loading}
                    />
                </div>
                <h2 className="page-header">My Pictures</h2>
                <Masonry
                  className={'my-gallery-class'}
                  options={masonryOptions}
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
