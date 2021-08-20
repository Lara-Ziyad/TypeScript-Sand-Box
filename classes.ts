interface UserInterface{
    name: string;
    email: string;
    age: number;
    register()
    payInvoice( )
}
//////////////////////////////////////////
// implements UserInterface 
class User implements UserInterface {
    //if we add 
    // 1. privit before the proparties then i can use them only withen class user.
    // 2. public we can use the class any where
    // 3. protected we can access the class from any class thet inherits this one 
      private name: string;
      public email: string;
      protected age: number;

    constructor (name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created : '+this.name);
    }


    //methods in classes
   register (){
    console.log(this.name + 'is new registered')
   }
    
    payInvoice() {
       console.log(this.name + ' paid Invoice')
   }
}

// make dependency of the class and call the method
// let layla = new User('layala', 'layla@gmail.com', 13);
// console.log(layla.email)
// layla.register()



//////////////////////////////////
// Making inherited class

class Member extends User {
    
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
       // super get the properties fro the upper class 
        super(name, email, age);
        this.id = id;
    }
      // inherite the function from the upper one
    payInvoice() {
        super.payInvoice()
    }
}

let simon: User = new Member(1, 'simon', 'simon@gmail.com', 39)
simon.payInvoice()