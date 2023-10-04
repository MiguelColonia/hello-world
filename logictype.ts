let firstName : string = "Miguel";
// explicito, le dices que es un string

const json = JSON.parse("55");
console.log(typeof json);

let u = true;

let v: any = true;
Math.round(v)

//No error, podría ser cualquier(any) tipo


let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z);

const names: string [] = [];
names.push("Miguel");
console.log(names);

const numbers = [1,2,3];
numbers.push(8);

let head: number = numbers[0];

console.log(head);

let ourTuple : [number, boolean,string];

ourTuple = [5,true,"Miguel"];

ourTuple.push("Metodo push");

const graph: [x: number, y: number] = [55.2, 41.3];


const graphi: [number, number] = [55.2, 41.3];
const [i, j] = graphi;

console.log(i + j);


const car: {type : string, model : string, year : number } = {
    type: "Toyota",
    model: "Corolla",
    year: 1999
};

car.type = "Ford";

enum CardinalDirections {
    North,
    East,
    South,
    West
}
let curremtDirection = CardinalDirections.East;

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);

  interface Rectangle {
    height: number,
    width: number
  }

  const rectangle : Rectangle = {
    height: 20,
    width: 10
  };

  interface ColoredRectangle extends Rectangle {
    color: string
  }

  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

  function printStatusCode(code: String | number) {
    console.log("my status code is ${code}.")
  }
  printStatusCode(404);
  printStatusCode("404");

  // the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
  }

  function printHello(): void {
    console.log('Hello!');
  }

  function multiply(a: number, b: number) {
    return a * b;
  }

  // the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }
  

function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }

  function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }

//En TypeScript (y en JavaScript), los tres puntos consecutivos (...) 
//se utilizan para crear parámetros de funciones conocidos como "rest parameters" o "parámetros de resto". 
//Estos parámetros permiten a una función aceptar un número variable de argumentos en forma de una matriz.
  
let x: unknown = 'hello';
console.log((x as string).length); //casting

//Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
let o: unknown = 4;
console.log((x as string).length); // prints undefined since numbers don't have a length


let p: unknown = 'hello';
console.log((<string>x).length); //casting

let ü: unknown = 'hello';
console.log((x as string).length); //casting


class Persona {
    name: string;
  }
  
  const persona = new Persona();
  persona.name = "Jane";

  class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }

  class Persono {
    private readonly name: string;
  
    public constructor(name: string) {
      // name cannot be changed after this initial definition,
      // which has to be either at it's declaration or in the constructor.
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person = new Person("Jane");
  console.log(person.getName());

  interface Shape {
    getArea: () => number;
  }

  interface Shape {
    getArea: () => number;
  }
  
  class Rectangles implements Shape {
    public constructor(protected readonly widtha: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.widtha * this.height;
    }
  }
  abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  class Rectangle extends Polygon {
    public constructor(protected readonly widthr: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }