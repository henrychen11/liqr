import React from 'react';


class AddToAlbum extends React.Component {
  <button>Add to albums</button>
  <ul>
    { (userAlbums.length === 0) ? <div></div> :
      userAlbums.map(album => (
        <li key={album.id}>{album.title}</li>
      ))
    }
  </ul>
}

export default AddToAlbum;
