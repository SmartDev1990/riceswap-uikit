import React, { useEffect, useRef } from "react";
import observerOptions from "./options";
import Wrapper from "./Wrapper";
import { ImageProps } from "./types";

const BackgroundImage: React.FC<ImageProps> = ({ src, ...otherProps }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = (imgRef.current as unknown) as HTMLElement;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          img.style.backgroundImage = `url("https://riceprotocol.xyz/img/row-head.png")`;
          observer.disconnect();
        }
      });
    }, observerOptions);
    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <Wrapper ref={imgRef} {...otherProps} />;
};

export default BackgroundImage;
