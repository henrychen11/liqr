import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';

export default ({photo}) => {
  return (
    <div className="column">
      {photo.map( (el) =>
         <Link key={el.id} to={`/photos/${el.id}`}>
          <Image key={el.id} className="image" publicId={el.img_url} cloudName="liquidpineapple" />
        </Link>
      )}
    </div>
    );
  };
