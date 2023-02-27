import React from "react";
import ContentLoader from "react-content-loader";

const SliderLoaders = (props) => {
  const height = window.innerHeight - 75;
  const width = "90vw";

  return (
    <>
      <ContentLoader
        viewBox={`0 0 ${height} ${width}`}
        {...props}
        backgroundColor="#DADADA"
        foregroundColor="#ecebeb"
        style={{ width: "90vw", height: "25vh" }}
      >
        <rect
          x="0"
          y="0"
          rx="0"
          ry="0"
          style={{ width: "100%", height: "100%" }}
        />
      </ContentLoader>
    </>
  );
};

export default SliderLoaders;
