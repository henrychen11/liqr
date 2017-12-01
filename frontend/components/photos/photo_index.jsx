import React from 'react';
import PhotoIndexItem from './photo_index_item';
import Masonry from 'react-masonry-component';
import Spinner from './spinner';

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

    if (this.state.loading){
      return (
          <Spinner />
      );
    } else {
      return (
        <div>
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
}

export default PhotoIndex;
