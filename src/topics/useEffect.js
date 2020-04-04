
import React, { useRef, useEffect } from "react";
import { useState } from "react";

const ScrollViewImage = ({primaryImg, secondryImg}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return (() => {
      window.removeEventListener('scroll', scrollHandler);
    });
  });

  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  }

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    })
  }

  return <img style={{display:'block'}} src={inView ? primaryImg : secondryImg} alt="dd" ref={imageRef} />;
}

export default ScrollViewImage;
