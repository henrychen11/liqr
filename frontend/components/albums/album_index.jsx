import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  componentWillMount() {
    // debugger
    this.props.requestAlbums(this.props.currentUser.id);
  }

  render() {
        return (
          <div className="grid">
            { this.props.albums.map( (album) =>
            <AlbumIndexItem key={album.id} album={album}/>
            )}
          </div>
        );
      }
}

export default AlbumIndex;


// render() {
//
//     return (
//       <div>
//         { this.props.albums.map( (album) =>
//         <AlbumIndexItem key={album.id} album={album}/>
//         )}
//       </div>
//     );
//   }
// }
