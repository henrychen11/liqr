import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';
// import Spinner from './spinner';
import { RingLoader } from 'react-spinners';

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

    if (this.state.loading){
      return (
        <Spinner />
      );
    } else {

      return (
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
            );
        }
      }
    }
export default PhotoUserIndex;
