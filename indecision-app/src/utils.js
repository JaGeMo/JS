console.log('utils.js is running .. ');

const square = (x) => x*x;

export const add = (x,y) => {
  let z = 1;
  return x+y;
}

export { square };

export const isAdult = (age) => {
  if(age > 18) {
    return true;
  } else {
    return false;
  }
}

export const canDrink = (age) => {
  if( age >= 18) {
    return true;
  } else {
    return false;
  }
}