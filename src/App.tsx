import React from "react";
import { Color, sayHello, Rectangle} from "./BasicTypes/basicTypes";

const App: React.FC = () => {
  const myColor: Color = Color.Blue;

  // Create an instance of the Rectangle class
  const myRectangle = new Rectangle(5, 10, myColor);

  sayHello();
  return (
    <div>
      <p>Selected color: {myColor}</p>
      <p>{myRectangle.getDetails()}</p>
    </div>
  );
};

export default App;


