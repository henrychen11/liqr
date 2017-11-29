import React from 'react';
import { Image } from 'cloudinary-react';


class AlbumIndexItem extends React.Component{

  render(){
      return (
        <div className="album-image-container">
            <Image className="image-element-class-album" publicId={this.props.album.album_cover_url} cloudName="liquidpineapple" />
          <div className="album-caption-text">
                <p className="custom-album-text">{this.props.album.title}</p>
                <p className="custom-album-text">{this.props.album.description}</p>
          </div>
        </div>
      );
  }
}

export default AlbumIndexItem;
