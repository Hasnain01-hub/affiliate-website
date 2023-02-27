import React from "react";
import ContentLoader from "react-content-loader";

const SliderLoaders = (props) => {
  return (
    <>
      <ContentLoader
        viewBox="0 0 1366 300"
        {...props}
        backgroundColor="#DADADA"
        foregroundColor="#ecebeb"
        style={{ width: "100%", height: "300px" }}
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
