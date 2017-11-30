import React from 'react';
import { Image, Transformation } from 'cloudinary-react';


class AlbumIndexItem extends React.Component{

  render(){
      return (
        <div className="album-image-container">
          {
            (this.props.album.album_cover_url === null) ? <img className="image-element-class-album" src="https://images.unsplash.com/photo-1493156624194-053884f699d4?auto=format&fit=crop&w=1500&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" /> :
              <Image className="image-element-class-album" publicId={this.props.album.album_cover_url} cloudName="liquidpineapple">
                <Transformation width="250" crop="scale" />
              </Image>
          }
      <div className="album-caption-text">
        <p className="custom-album-text">{this.props.album.title}</p>
        <p className="custom-album-text">{this.props.album.description}</p>
      </div>
    </div>
      );
  }
}

export default AlbumIndexItem;
