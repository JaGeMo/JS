// Function declarations
function square1(x = 5){
  return x*x;
}
console.log("function declaration ran: " + square1(8));



// Function expressions
const square2 = ((x=6) => {
    return x*x;
  }
)
console.log("function expression ran: " + square2(7));



// IIFE
((value) => {
  console.log("iife ran: " + value*value);
})(5)



// Property methods
const todo = {
  add: (x = 5) => {
    return x*x;
  },
  delete: ( x = 5) => {
    return x-2;
  }
}
console.log("first property method ran: " + todo.add(2));
console.log("second property method ran: " + todo.delete(23));