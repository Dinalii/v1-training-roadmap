import React from "react";
import RectangleDetails from "./BasicTypes/rectangleDetails";
import { RectangleProvider } from "./BasicTypes/rectangleContext";
import useForm from "./BasicTypes/useForm";

const App = () => {
  const { values, errors, handleChange, setErrors } = useForm({
    width: 0,
    height: 0,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted values:", values);
  };

  return (
    <RectangleProvider>
      <div className="container">
        <h1
          style={{ color: "#2c3e50", marginBottom: "30px", fontSize: "28px" }}
        >
          Rectangle Information
        </h1>
        <RectangleDetails />
        <form id="rectangle-form" onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="width-input"
              style={{ color: "#2c3e50", marginRight: "10px" }}
            >
              Width:
            </label>
            <input
              type="number"
              id="width-input"
              name="width"
              value={values.width}
              onChange={handleChange}
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="height-input"
              style={{ color: "#2c3e50", marginRight: "10px" }}
            >
              Height:
            </label>
            <input
              type="number"
              id="height-input"
              name="height"
              value={values.height}
              onChange={handleChange}
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="area-input"
              style={{ color: "#2c3e50", marginRight: "10px" }}
            >
              Area:
            </label>
            <input
              type="text"
              id="area-input"
              name="area"
              value={values.width * values.height}
              disabled
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#2ecc71",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Create Rectangle
          </button>
        </form>
      </div>
    </RectangleProvider>
  );
};

export default App;
