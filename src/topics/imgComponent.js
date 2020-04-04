import React from "react";
import { useRef } from "react";

const ImgComponent = ({ primaryImg, secondryImg }) => {
  const imageRef = useRef(null);

  return <img
    onMouseOver={() => { imageRef.current.src = secondryImg }}
    onMouseOut={() => { imageRef.current.src = primaryImg }}
    src={primaryImg} alt="sdsd"
    ref={imageRef}
  />
}

export default ImgComponent;
