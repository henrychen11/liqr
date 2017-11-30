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
      {photo_id: this.state.currentAlbumId}
    );
  }

  render() {
    const { userAlbums } = this.props;

    return (
      <form className="add-album-form" onSubmit={this.handleSubmit} >
          <label className="select-text">
            Your current albums:
            <select className="dropdown-list" value={this.state.value} onChange={this.handleChange}>
            { userAlbums.map(album => (
                <option value={album.id} key={album.id}>{album.title}</option>
              ))
            }
          </select>
        </label>
          <input className="album-select-button" type="submit" value="Add to album" />
      </form>
    );
  }
}

export default AddToAlbum;
