import React, { useState } from "react";
import { Color, Rectangle } from "./BasicTypes/basicTypes";

const App: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [rectangle, setRectangle] = useState<Rectangle | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (width > 0 && height > 0) {
      const newRectangle = new Rectangle(width, height, Color.Blue);
      setRectangle(newRectangle);
      // Clear input fields
      setWidth(0);
      setHeight(0);
    }
  };

  return (
    <div className="container">
      <h1>Rectangle Information</h1>
      {rectangle && (
        <div className="rectangle-info">
          <p>
            <strong>Color:</strong> {Color[rectangle.color]}
          </p>
          <p>
            <strong>Width:</strong> {rectangle.width}
          </p>
          <p>
            <strong>Height:</strong> {rectangle.height}
          </p>
          <p>
            <strong>Area:</strong> {rectangle.area()}
          </p>
        </div>
      )}
      <form id="rectangle-form" onSubmit={handleSubmit}>
        <label htmlFor="width-input">Width:</label>
        <input
          type="number"
          id="width-input"
          name="width"
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value))}
          required
        />
        <label htmlFor="height-input">Height:</label>
        <input
          type="number"
          id="height-input"
          name="height"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
          required
        />
        <button type="submit">Create Rectangle</button>
      </form>
    </div>
  );
};

export default App;
