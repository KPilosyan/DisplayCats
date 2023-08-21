import React from 'react';

function CatImage({ url }) {
  return (
    <div className="cat-image">
      <img src={url} alt="Cat" />
    </div>
  );
}

export default CatImage;
