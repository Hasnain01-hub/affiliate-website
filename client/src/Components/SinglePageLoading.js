import React from "react";
import ContentLoader from "react-content-loader";

const SinglePageLoading = (props) => {
  const height = window.innerHeight - 2000;
  const width = window.innerWidth + 2000;
  return (
    <ContentLoader
      viewBox={`0 0 ${height} ${width}`}
      style={{ height: "100%", width: "80vw" }}
      backgroundColor="#DADADA"
      foregroundColor="#ecebeb"
      {...props}
    >
      {width > 2800 ? (
        <>
          <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
          <rect x="229" y="300" rx="0" ry="0" width="0" height="0" />
          <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
          <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
          <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
          <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
          <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
          <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />

          <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />
          <rect x="470" y="99" rx="0" ry="0" width="70" height="30" />
        </>
      ) : (
        <>
          <rect
            x="64"
            y="0"
            rx="0"
            ry="0"
            style={{ width: "80vw", height: "60%" }}
          />

          <rect x="64" y="168" rx="0" ry="0" width="300" height="25" />
          <rect x="64" y="198" rx="0" ry="0" width="300" height="6" />
          <rect x="64" y="208" rx="0" ry="0" width="300" height="6" />
          <rect x="64" y="218" rx="0" ry="0" width="300" height="6" />
          <rect x="64" y="238" rx="0" ry="0" width="70" height="30" />
        </>
      )}
    </ContentLoader>
  );
};

export default SinglePageLoading;
