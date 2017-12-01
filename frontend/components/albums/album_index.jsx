import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0,
    fitWidth: true
};

class AlbumIndex extends React.Component {
  componentWillMount() {
    this.props.requestAlbums(this.props.currentUser.id);
  }

  render() {
      return (
        <div>
          <h2 className="page-header">My Albums</h2>
          <Masonry
            className={'my-gallery-class'}
            options={masonryOptions}
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
