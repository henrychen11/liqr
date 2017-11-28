import React from 'react';
import { Image } from 'cloudinary-react';


class AlbumIndexItem extends React.Component{

  constructor(props){
    super(props);
    }

  render(){
      return (
        <div className="album-image-container">
            <Image className="image-element-class" key={this.props.album.id} publicId={this.props.album.album_cover_url} cloudName="liquidpineapple" />
          <div className="album-caption-text">
                <p>{this.props.album.title}</p>
                <p>{this.props.album.description}</p>
                <p>By: {this.props.album.author_username}</p>
          </div>
        </div>
      );
  }
}

export default AlbumIndexItem;
