/*function showTodo (todo: { title: string, text: string }) {
    console.log(todo.title + ' : ' + todo.text);
}
let myTodo = { title: 'Trash', text: 'Take out trash' }
showTodo(myTodo);*/



//////////////////////////////////////////////////
// you can't use Interface with primitive or union
// used insted of Object
//////////////////////////////////////////////////



interface Todo {
         title: string;
         text: string
};
 // function will accept variables which has type as the Interface
function showTodo (todo: Todo) {
    console.log(todo.title + ' : ' + todo.text);
};
// create variables form the interface                               
let myTodo = { title: 'Trash', text: 'Take out trash' };
// used in the function 
showTodo(myTodo);


////////////////////

// create Interface
interface UserInterface {
     id: number
     readonly name: string
    age?: number
    // ? to make it optional then if i don't have it in the independence, i won't have error
  }
// create object independence from the interface
  const user1: UserInterface = {
    id: 1,
    name: 'John',
  }
  // can change the value of the independence
user1.id = 5
  //if we have readonly  like in the name then i can't



  //Interface with functions 
  interface MathFunc {
    (x: number, y: number): number
  }
  // create function independence from the interface
  const add: MathFunc = (x: number, y: number): number => x + y
  const sub: MathFunc = (x: number, y: number): number => x - y
  


  