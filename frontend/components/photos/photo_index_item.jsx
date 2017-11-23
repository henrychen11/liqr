import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
export default ({photo}) => {

  return (
      <div className="photo-index-item">
          <Image publicId={photo.img_url} cloudName="liquidpineapple" >
            <Transformation width="1000" crop="scale" />
          </Image>
      </div>
    );
  };
