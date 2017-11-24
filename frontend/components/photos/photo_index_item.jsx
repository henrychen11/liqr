import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

export default ({photo}) => {
  return (
    <div className="column">
      {photo.map( (el) =>
        <Image key={el.id} className="image" publicId={el.img_url} cloudName="liquidpineapple" />
      )}
    </div>
    );
  };
