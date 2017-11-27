import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  componentWillMount() {
    // debugger
    this.props.requestAlbums(this.props.currentUser.id);
  }

  render() {
        return (
          <div className="album-grid">
            { this.props.albums.map( (album) =>
              <Link key={album.id} to={`/albums/${album.id}`}>
              <AlbumIndexItem key={album.id} album={album}/>
              </Link>
            )}
          </div>
        );
      }
}

export default AlbumIndex;
