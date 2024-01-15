function fibonacci(n) {

if(n <= 2) return -1;

let a = 0, b = 1 ;

// n = 3

while(n > 2) {

let curr = a + b;

a = b;

b = curr;
n--;

}
function isSameType(value1, value2) {
return typeof value1===typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
