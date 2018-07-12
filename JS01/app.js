// log to console
console.time("start");
console.log("logging to console");
console.error("some error");
console.log([1, 2, 6, 7]);
console.table({ a: 1, b: 2 });
console.log(34);
console.log(true);
console.timeEnd("start");

// let
let name = "John Doe";
console.log(name);
name = "Steve";
console.log(name);
/*
// const
// const firstName; // not allowed because it need initialisation
// const nameConst = "John";
const person = {
  name: "John",
  age: 30
};
person.name = "SarahLuise";
console.log(person);
console.log(person.name.lastIndexOf("r")); // index of letter 'r' from the right
console.log(person.name.charAt(person.name.length - 1)); // last character

const array = [1, 2, 3, 4];
console.log(array);
array.push(3, 5, 8);
console.log(array);
console.log(typeof array);

let val;
val = Number("5");
console.log(val);
console.log(typeof val);
console.log(val.toFixed());
val = parseFloat(100.3);
console.log(val);
console.log(val.toFixed(2));
console.log(parseInt(val));

let mathObj;
mathObj = Math.random();
console.log(mathObj); // always < 1
console.log(mathObj * 20 + 1); // times 20 --> Numbers between 0 and 20 / for getting numbers larger than 1 always add 1 onto it
console.log(Math.floor(mathObj * 20 + 1)); // for getting numbers larger than 1 add 1 onto it
*/

// Person constructor
function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
  console.log(this);

  this.calculatedAge = function(){
    const ageDiff = Date.now() - this.birthday.getTime();
    const age = new Date(ageDiff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  const age = this.calculatedAge();
  console.log(age);
}

const numbers = [2, 22, 234, 33, 45, 467, 53];
const numbers2 = new Array(6, 7, 8, 9);
const mixed = new Array("string", true, undefined, null, 4);
// add at the end
numbers.push(100);
// add at the beginning
numbers.unshift(12);
// remove from end
numbers.pop();
// remove from beginning
numbers.shift();
// reverse array
numbers.reverse();
// sort, but only based on first digit
numbers.sort();
// true sort ascending (compare function)
const newNumbers = numbers.sort(function(x, y) {
  return x - y;
});
// true sort descending
const newReverseNumbers = numbers.sort(function(x, y) {
  return y - x;
});

console.log(numbers);
