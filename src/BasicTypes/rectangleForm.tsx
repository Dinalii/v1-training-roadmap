// RectangleForm.tsx
import React, { useState } from "react";

interface RectangleFormProps {
  onSubmit: (width: number, height: number) => void;
}

const RectangleForm: React.FC<RectangleFormProps> = ({ onSubmit }) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (width > 0 && height > 0) {
      onSubmit(width, height);
      setWidth(0);
      setHeight(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default RectangleForm;
