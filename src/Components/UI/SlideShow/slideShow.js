import React from "react";

import image from "../Image/storage.jpg";
const SlideShow = () => {
  return (
    <div className="container">
      <div className="mySlides" style={{ width: "95%", margin: "auto",marginTop:10 }}>
        <img src={image} style={{ width: "100%", height: 450 }} />
      </div>
    </div>
  );
};

export default SlideShow;
