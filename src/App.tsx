// Importing useState hook from React
import { useState } from "react";

// Importing RectangleDetails component and Color enum from respective files
import RectangleDetails from "./BasicTypes/rectangleDetails";
import { Color } from "./BasicTypes/basicTypes";

// Functional component named App
const App: React.FC = () => {
  // State variables for width, height, and color
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [color, setColor] = useState<Color>(Color.Blue); // Initial color set to Blue

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Checking if width and height are greater than 0
    if (width > 0 && height > 0) {
      setColor(Color.Blue);
    }
  };

  // JSX structure representing the component
  return (
    <div className="container">
      <h1>Rectangle Information</h1>
      {/* Rendering RectangleDetails component with width, height, and color props */}
      <RectangleDetails width={width} height={height} color={color} />

      <form id="rectangle-form" onSubmit={handleSubmit}>
        <label htmlFor="width-input">Width:</label>
        <input
          type="number"
          id="width-input"
          name="width"
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value))} // Updating width state onChange
          required
        />

        <label htmlFor="height-input">Height:</label>
        <input
          type="number"
          id="height-input"
          name="height"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))} // Updating height state onChange
          required
        />

        <button type="submit">Create Rectangle</button>
      </form>
    </div>
  );
};

export default App;
