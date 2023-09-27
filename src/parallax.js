import React from "react";

const ParallaxPage = () => {
  const parallaxStyle = {
    backgroundImage: "url('../assets/wallpaper2you_203457.jpg')",
    height: "100vh", // Set the height to 100% of the viewport
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const contentStyle = {
    height: "1000px",
    backgroundColor: "red",
    fontSize: "36px",
  };

  return (
    <div>
      <div style={parallaxStyle}></div>
      <div style={contentStyle}>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>
      <div style={parallaxStyle}></div>
    </div>
  );
};

export default ParallaxPage;