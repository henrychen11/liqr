import React from 'react';

export default ( {album} ) => {
  return (
    album.photos.map( (photo) => "Print this 10 times")
  );
};
