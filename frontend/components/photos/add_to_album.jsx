import React from 'react';

class AddToAlbum extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentAlbumId: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({currentAlbumId: parseInt(event.target.value)});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createPhotoAlbums(
      {album_id: this.state.currentAlbumId,
      photo_id: this.props.photoId}
    );
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, idx) => (
            <li className="errors" key={idx}>{error}</li>
          )
        )}
      </ul>
    );
  }

  render() {
    const { userAlbums } = this.props;
    return (
      <div>
        <form className="add-album-form" onSubmit={this.handleSubmit} >
          <label className="select-text">
            Your current albums:
            <select className="dropdown-list" value={this.state.value} onChange={this.handleChange}>
              {
                userAlbums.map(album => (
                  <option value={album.id} key={album.id}>{album.title}</option>
                ))
              }
            </select>
          </label>
          <input onClick={() => this.props.clearErrors().bind(this)} className="album-select-button" type="submit" value="Add to album" />
        </form>
        <div>{this.renderErrors()}</div>
      </div>
    );
  }
}

export default AddToAlbum;
// {console.log('testatea', userAlbums, this.props. albums, userAlbums.filter( (f) => !this.props.albums.includes(f)))}
