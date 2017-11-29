import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

class AlbumIndex extends React.Component {
  componentWillMount() {
    // debugger
    this.props.requestAlbums(this.props.currentUser.id);
  }

  render() {
    const masonryOptions = {
      // fitWidth: true,
      // stagger: 100,
      gutter: 3,
      transitionDuration: '0.3s' };

      return (
        <div>
          <h2 className="page-header">My Albums</h2>
          <Masonry
            className={'my-gallery-class'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            >
            { this.props.albums.map( (album) =>
              <Link key={album.id} to={`/albums/${album.id}`}>
                <AlbumIndexItem album={album}/>
              </Link>
            )}
          </Masonry>
        </div>
      );
    }
}

export default AlbumIndex;
