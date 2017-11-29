import React from 'react';

class AddToAlbum extends React.Component {

  render() {
    const { userAlbums } = this.props;

    return (

      <div>hello this is add to albumß</div>
    );
  }
}

export default AddToAlbum;
// <div>
//   <button>Add to albums</button>
//   <ul>
//     { (userAlbums.length === 0) ? <div></div> :
//       userAlbums.map(album => (
//         <li key={album.id}>{album.title}</li>
//       ))
//     }
//   </ul>
//
// </div>
