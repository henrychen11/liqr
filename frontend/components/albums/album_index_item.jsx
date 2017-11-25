import React from 'react';
import { Image } from 'cloudinary-react';


class AlbumIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
        isHovering: false,
      };
    }


    handleMouseHover() {
      this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
      return {
        isHovering: !state.isHovering,
      };
    }


  render(){
      return (
        <div>
          <div
            className="photo"
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <Image className="" key={this.props.album.id} publicId={this.props.album.album_cover_url} cloudName="liquidpineapple" />
          </div>
          {
            this.state.isHovering &&
            <div className="">
                <h1>{this.props.album.title}</h1>
                <h2>{this.props.album.description}</h2>
            </div>
          }
        </div>
      );
  }
}


// return (
//
//   <div className="photo">
//     <div
//       onMouseEnter={this.handleMouseHover}
//       onMouseLeave={this.handleMouseHover}
//       >
//       <h1>{this.props.album.title}</h1>
//       <h2>{this.props.album.description}</h2>
//     </div>
//     <Image className="" key={this.props.album.id} publicId={this.props.album.album_cover_url} cloudName="liquidpineapple" />
//   </div>
// );


export default AlbumIndexItem;
