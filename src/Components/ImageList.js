import React from "react";

const ImageList = ({images}) => {
 
  return (
    <div>
        {
      images.map(value => (
        <img 
        src={value.urls.small} alt={value.alt_description}/>
      ))
      }
    </div>
  );
};

export default ImageList;
