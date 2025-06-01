import React from "react";
import "../ImageSlider.css"; 

const images = [
  "images/1.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/8.svg",
  "images/7.svg",
  "images/9.svg",
  "images/10.svg",
  "images/11.svg",
];

const ImageSlider = () => {
  const quantity = images.length;
  const width = 100; 
  const height = 100; 
  const duration = 10;

  return (
    <div
      className="absolute bottom-[5%] right-[20%] w-[60%] overflow-hidden opacity-70 mix-blend-difference"
      style={{
        height: `${height}px`,
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}
    >
      <div className="relative z-10" style={{ minWidth: `${width * quantity}px`, height: `${height}px` }}>
        {images.map((src, i) => {
          const delay = (duration / quantity) * i - duration;
          return (
            <div
              key={i}
              className="absolute left-full w-[100px] h-[100px] animate-slider"
              style={{
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`
              }}
            >
              <img src={src} alt={`img-${i + 1}`} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
