// 1. Boolean, Number, String
let isDone: boolean = false;
let myNumber: number = 42;
let myString: string = "Hello, TypeScript!";

// 2. Arrays
let myArray: Array<number> = [1, 2, 3, 4]; // Using Array generic type
let myStringArray: Array<string> = ["apple", "banana", "orange"];

// 3. Tuples
let myTuple: [number, string] = [1, "apple"];

export enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

const colorIndex: { [key in Color]: string } = {
  [Color.Red]: "Red",
  [Color.Green]: "Green",
  [Color.Blue]: "Blue",
};

console.log(colorIndex[Color.Red]);

console.log(colorIndex[Color.Green]);

console.log(colorIndex[Color.Blue]);

let myColor: Color = Color.Green;

// 8. Interfaces and Classes
interface Shape {
  color: Color;
  area(): number;
}

export class Rectangle implements Shape {
  constructor(
    public readonly width: number,
    public readonly height: number,
    public readonly color: Color
  ) {}

  area(): number {
    return this.width * this.height;
  }

  getDetails(): string {
    return `Rectangle - Color: ${this.color}, Width: ${this.width}, Height: ${
      this.height
    }, Area: ${this.area()}`;
  }
}

const myRectangle = new Rectangle(5, 10, Color.Blue);
console.log(myRectangle.getDetails());

// Function Types
type AreaFunction = (shape: Shape) => number;

function calculateArea(shape: Shape, areaFn: AreaFunction): number {
  return areaFn(shape);
}

const rectangleArea: AreaFunction = (shape) => shape.area();
console.log("Area of Rectangle:", calculateArea(myRectangle, rectangleArea));

// Generic Types and Interfaces
interface Pair<T, U> {
  first: T;
  second: U;
}

function printPair<T, U>(pair: Pair<T, U>): void {
  console.log(`First: ${pair.first}, Second: ${pair.second}`);
}

const myPair: Pair<number, string> = { first: 42, second: "Hello" };
printPair(myPair);

// 5. Any
let myAny: any = 42;
myAny = "Now it's a string";
myAny = true;

// 6. Void
function sayHello(): void {
  console.log("Hello, void!");
}

// 7. Null and Undefined
let myNull: null = null;
let myUndefined: undefined = undefined;

// Testing the types
console.log("Boolean:", isDone);
console.log("Number:", myNumber);
console.log("String:", myString);

console.log("Array:", myArray);
console.log("String Array:", myStringArray);

console.log("Tuple:", myTuple);

console.log("Enum:", myColor);

console.log("Any:", myAny);

sayHello();

console.log("Null:", myNull);
console.log("Undefined:", myUndefined);
