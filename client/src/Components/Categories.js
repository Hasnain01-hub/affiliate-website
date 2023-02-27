import React from "react";
import ContentLoader from "react-content-loader";

const Categories = ({
  width = 800,
  heading = { width: 80, height: 24 },
  row = 1,
  column = 4,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  const list = [];

  let height;

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column;

      const x = padding + j * (itemWidth + padding);

      const height1 = itemWidth;

      const space = padding + height1 + padding / 0 + padding * 1;

      const y1 = padding + heading.height + padding * 2 + space * (i - 1);

      list.push(
        <>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
        </>
      );
    }
  }

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      {...props}
      backgroundColor="#DADADA"
      foregroundColor="#ecebeb"
    >
      {list}
    </ContentLoader>
  );
};

export default Categories;
