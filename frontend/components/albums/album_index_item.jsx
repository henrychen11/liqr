import React from 'react';

export default ( {album} ) => {
  return (
    <div>
      <h1>{album.title}</h1>
      <h1>{album.description}</h1>
    </div>
  );
};
