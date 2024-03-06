import React, { useContext } from "react";
import { RectangleContext } from "./rectangleContext";

const RectangleDetails: React.FC = () => {
  const { width, height, color } = useContext(RectangleContext) || {};

  if (!width || !height || !color) {
    return null;
  }

  const area = width * height;

  return (
    <div className="rectangle-info">
      <p>
        <strong>Color:</strong> {color}
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
