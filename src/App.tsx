import React from "react";
import "./App.css";

let name: string;
name = "Lola";

// Alias: Type
type Person = {
  name: string;
  age: number;
  isMarried?: boolean;
};

//Alias: Interface
interface Human {
  race: string;
  color: string;
  blueEyes?: boolean;
}

let myNeighbour: Person = {
  name: "Baja",
  age: 43,
};

let indonesian: Human = {
  race: "asian",
  color: "yellow",
  blueEyes: false,
};

// this is how we assign array of Object
let arrayOfObj: Person[];

// UNION type: we use it to declare two different types
let age: number | string;
let umur: number | string;

age = "Twenty Two";
umur = 55;

// Function type
let printName: (name: string) => void;

// Unknown type
let printAddress: unknown;

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <p>Hello {name}</p>
    </div>
  );
}

export default App;
