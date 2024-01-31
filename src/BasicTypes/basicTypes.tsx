// 1. Boolean, Number, String
let isDone: boolean = false;
let myNumber: number = 42;
let myString: string = "Hello, TypeScript!";

// 2. Arrays
let myArray: number[] = [1, 2, 3, 4];
let myStringArray: string[] = ["apple", "banana", "orange"];

// 3. Tuples
let myTuple: [number, string] = [1, "apple"];

// 4. Enum
export enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;

// 8. Interfaces and Classes
interface Shape {
  color: Color;
  area(): number;
}

export class Rectangle implements Shape {
  private width: number;
  private height: number;
  public readonly color: Color; // Use the same or less restrictive access modifier

  constructor(width: number, height: number, color: Color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area(): number {
    return this.width * this.height;
  }

  getDetails(): string {
    return `Rectangle - Color: ${Color[this.color]}, Width: ${this.width}, Height: ${this.height}, Area: ${this.area()}`;
  }
}

const myRectangle = new Rectangle(5, 10, Color.Blue);
console.log(myRectangle.getDetails());


// 5. Any
let myAny: any = 42;
myAny = "Now it's a string";
myAny = true;

// 6. Void
export function sayHello(): void {
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
