'use strict';

function square(x) {
  return x *= x;
}

// calling a standard function
var sqrValue = square(5);
console.log('sqrValue', sqrValue);

// regular syntax
var sqrValArrow = function sqrValArrow(x) {
  return x *= x;
};

// expression syntax
var sqrValArrowTwo = function sqrValArrowTwo(x) {
  return x *= x;
};

console.log('sqrValArrow', sqrValArrow(6));
console.log('sqrValArrowTwo', sqrValArrowTwo(7));

var fullName = 'Mike Smith';

// regular syntax
var regString = function regString(fullName) {
  return fullName.split(' ')[0];
};

var regStringExpression = function regStringExpression(fullName) {
  return fullName.split(' ')[0];
};

console.log('regString', regString(fullName));
console.log('regStringExpression', regStringExpression(fullName));
