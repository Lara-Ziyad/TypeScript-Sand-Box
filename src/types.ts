let myString :   string;
myString = "Hello first ts";
console.log(myString);
 //OR
let mystring: string = "Hello first ts";

// let strArr: srting[];
//OR
let strArr: Array<string>;

strArr = ['lara', 'layla']

// let numArr: number[]
//OR
let numArr: Array<number>;
numArr = [39, 13]



// let boolArr: []
//OR
let boolArr: Array<boolean>;
boolArr = [false, true];


//Tuple
let strNumTuple: [string, number]
strNumTuple = ['lara', 39]
//as many as string and numbers i can add but in the right order 


//void 
let myVoid: void = null //or undeifined 

//null
let mynull: null = null //or undeifined 

//undefined
let myundefined: undefined = null//or undeifined 

// function will return nothing but we can pass string or number because the parameters are union
function log(message: string | number): void {
    console.log(message)
  }
  
/////////////////////////////////////////
//more types

//Tuple Array
let employee: [string, number][]
employee = [
    ['Lara', 1],
    ['Simon', 2],
    ['layla', 3]
]

//Union 

let pid: string | number
pid = '22'
//Or 'book'

//Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
// Up=0, Down=1, Left=2, Right=3 By Defult
// if we change Up = 1 then the other 2 3 4
console.log(Direction1.Up) // => 0 

enum Direction2 {
    Up = 'up',
    Down = 'down',
    Left= 'left',
    Right = 'right'
}


//Object 
const user:
    {
        id: number,
        name: string
    } = {
        id: 1,
    name: 'Lara'
}
//OR
type User = {
    id: number,
    name: string  
}
const user = 
     {
        id: 1,
    name: 'Lara'
}

//Type Assertion

let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number





// Generics use to build reussable components 
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push(1) // Throws error
