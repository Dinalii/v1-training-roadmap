import React from "react";
import { Color } from "./basicTypes";

interface RectangleDetailsProps {
  width: number;
  height: number;
  color: Color;
}

const RectangleDetails: React.FC<RectangleDetailsProps> = ({
  width,
  height,
  color,
}) => {
  const area = width * height;

  return (
    <div className="rectangle-info">
      <p>
        <strong>Color:</strong> {Color[color]}
      </p>
      <p>
        <strong>Width:</strong> {width}
      </p>
      <p>
        <strong>Height:</strong> {height}
      </p>
      <p>
        <strong>Area:</strong> {area}
      </p>
    </div>
  );
};

export default RectangleDetails;
