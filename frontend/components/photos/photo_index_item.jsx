import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';

export default ({photo}) => {
  return (
    <div className="photo-image-container">
      <Link key={photo.id} to={`/photos/${photo.id}`}>
        <Image key={photo.id} className="photo-image" publicId={photo.img_url} cloudName="liquidpineapple" />

        <div className="photo-caption-text">
          <p>{photo.title}</p>
          <p>By: {photo.author}</p>
        </div>

      </Link>

    </div>
    );
  };
