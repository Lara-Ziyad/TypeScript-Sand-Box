// function getSum(num1, num2) {
//     return num1 + num2;
// }
// console.log(getSum(39, 13));
//OR with types then i can only add numbers
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(39, 13));
var myNum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num1 == 'string') {
        num1 = parseInt(num2);
    }
    return num1 * num2;
};
console.log(myNum(39, 13));
