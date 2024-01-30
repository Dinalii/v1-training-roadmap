import React from "react";
import { Color, sayHello } from "./BasicTypes/basicTypes";

const App: React.FC = () => {
  const myColor: Color = Color.Blue;

  sayHello();
  return (
    <div>
      <p>Selected color: {myColor}</p>
    </div>
  );
};

export default App;
