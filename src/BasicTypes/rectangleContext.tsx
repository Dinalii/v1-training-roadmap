import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";
import { Color } from "./basicTypes";

interface RectangleContextType {
  width: number;
  height: number;
  color: Color;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setColor: (color: Color) => void;
}

const initialWidth = 0;
const initialHeight = 0;
const initialColor = Color.Blue;

export const RectangleContext = createContext<RectangleContextType | undefined>(
  undefined
);

export const RectangleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [width, setWidth] = useState<number>(initialWidth);
  const [height, setHeight] = useState<number>(initialHeight);
  const [color, setColor] = useState<Color>(initialColor);

  return (
    <RectangleContext.Provider
      value={{ width, height, color, setWidth, setHeight, setColor }}
    >
      {children}
    </RectangleContext.Provider>
  );
};

// useRectangle hook
export const useRectangle = () => {
  const context = useContext(RectangleContext);
  if (!context) {
    throw new Error("useRectangle must be used within a RectangleProvider");
  }
  return context;
};
