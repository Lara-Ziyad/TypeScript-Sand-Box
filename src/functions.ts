// function getSum(num1, num2) { 
//     return num1 + num2;
// }
// console.log(getSum(39, 13));


//OR with types then i can only add numbers
function getSum (num1:Number, num2:Number):Number {    
    return num1 + num2;
}
console.log(getSum(39, 13));


//////////////////////////////
let myNum = function (num1: any, num2: any): number {
    if (typeof num1 == 'string') {
        num1= parseInt (num1)
    }
    if (typeof num1 == 'string') {
        num1= parseInt (num2)
    }
return num1 * num2
}
console.log(myNum(39, 13));



///////////////////////////////
// if i want put one name like :console.log(getName("lara")) then the 2nd one will be undeifined so we can put if state
function getName(nam1: string, nam2: string): string{
    if (nam2 == undefined) {
        return nam1;
    }
    return nam1 + ' ' + nam2;   
}
console.log(getName("lara", 'ziyad'))


//////////////////////////////
//  if i return number or string i will have error 'type is not assignable to type 'void' so i return nothing which will work
function myVoid(): void  {
    return;
}
