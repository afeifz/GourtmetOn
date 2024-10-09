import React from "react";

const ImageComponent = ({ imageUrl, altText }) => {
  return (
    <div>
      <img className="imagem" src={imageUrl} alt={altText} style={{ width: '50%', height: 'auto', position: 'absolute', right: 0 , top: 100, marginRight: 0}}/>
    </div>
    
  );
};

export default ImageComponent;
