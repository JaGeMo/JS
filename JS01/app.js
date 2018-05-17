// log to console
console.time('start');
  console.log('logging to console');
  console.error('some error');
  console.log([1,2,6,7]);
  console.table({a:1,b:2});
  console.log(34);
  console.log(true);
console.timeEnd('start');

// let
let name = 'John Doe';
console.log(name);
name = "Steve";
console.log(name);

// const
// const firstName; // not allowed
const nameConst = "John";
const person = {
    name:'John',
    age:30};

person.name = "Sara";
console.log(person);

const array = [1,2,3,4];
console.log(array);
array.push(3,5,8);
console.log(array);
console.log(typeof array);
