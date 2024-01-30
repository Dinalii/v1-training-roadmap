// src/App.tsx
import React from 'react';
import { Color, sayHello } from './01. Basic Types/basicTypes';

const App: React.FC = () => {
  const myColor: Color = Color.Blue;

  return (
    <div>
      <h1>{sayHello()}</h1>
      <p>Selected color: {myColor}</p>
    </div>
  );
};

export default App;
