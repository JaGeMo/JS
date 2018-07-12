// hoisting and closures

// function declarations
function test(firstName = "John", lastName = "Doe") {
  return console.log("Hello " + firstName + " " + lastName);
}

// function expressions
const square = function(x = 3) {
  return x * x;
};

test();
console.log(square());

// anonymous functions
// IIFE immediately invokable function expressions - no separate call required
(function() {
  console.log("IIFE ran .. ");
})();

// object literals with functions
const todo = {
  add: function() {
    console.log("add todo");
  },
  edit: function(id) {
    console.log(`edited id no ${id}`);
  }
};

todo.add();
todo.edit(7);
