// VerticalParallax.js

import React, { useEffect, useState } from "react";
import "./VerticalParallax.css";

const VerticalParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = [
    {
      imageSrc: "wp1.jpg",
      text: "Text 1",
    },
    // Add data for images and text up to 10 entries
  ];

  return (
    <div className="vertical-parallax-container">
      {data.map((item, index) => (
        <div
          key={index}
          className="vertical-parallax-item"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <img src={item.imageSrc} alt={`Image ${index + 1}`} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default VerticalParallax;
