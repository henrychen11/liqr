import React from 'react';
import AlbumIndexItem from './album_index_item';


class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.requestAlbums(this.props.match.params.userId);
    this.props.requestUser(this.props.match.params.userId);
  }

  render() {
    if (!this.props.user) {
      return (
        <h1>You do NOT have access</h1>
      );
    } else if (this.props.albums.length === 0) {
      return (
        <h1>You have no albums</h1>
      );
    } else {
      return (
        <div>
          {this.props.albums.map( (album) =>
            <AlbumIndexItem key={album.id} album={album} />)
          }
        </div>
      );
    }
  }
}

export default AlbumIndex;
