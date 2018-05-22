function square (x) {
  return x *= x;
}

// calling a standard function
let sqrValue = square(5);
console.log('sqrValue', sqrValue);

// regular syntax
let sqrValArrow = (x) => {
  return x *= x;
};

// expression syntax
let sqrValArrowTwo = x => x *= x;

console.log('sqrValArrow',sqrValArrow(6));
console.log('sqrValArrowTwo',sqrValArrowTwo(7));

let fullName = 'Mike Smith';

// regular syntax
let regString = (fullName) => {
  return fullName.split(' ')[0];
};

let regStringExpression = (fullName) => fullName.split(' ')[0];

console.log('regString',regString(fullName));
console.log('regStringExpression',regStringExpression(fullName));