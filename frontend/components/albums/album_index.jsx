import React from 'react';
import AlbumIndexItem from './album_index_item';


class AlbumIndex extends React.Component {
  componentWillMount() {
    console.log(this.props.match);
    this.props.requestAlbums(this.props.currentUser.id);
  }

  render() {
    // if (!this.props.currentUser.id) {
    //   return (
    //     <h1>You do NOT have access</h1>
    //   );
    // } else if (this.props.albums.length === 0) {
    //   return (
    //     <h1>You have no albums</h1>
    //   );
    // } else {
      return (
        <div>
          { this.props.albums.map( (album) =>
          <AlbumIndexItem key={album.id} album={album}/>
          )}
        </div>
      );
    }
}

export default AlbumIndex;
//
// {this.props.albums.map( (album) =>
//   <AlbumIndexItem key={album.id} album={album} />)
// }
