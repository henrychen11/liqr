import React from 'react';

class AlbumShow extends React.Component {

  componentWillMount(){
    this.props.requestAlbum(this.props.albumId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.albumId !== newProps.match.params.albumId) {
      this.props.requestAlbum(newProps.match.params.albumId);
    }
  }



  render(){
    const {album} = this.props;

    if (!album) {
      return (
        <h1> You currently have no albums </h1>
      );
    }

    return (
      <h1>This is the Album: {album.title}</h1>
    );
  }
}

export default AlbumShow;
