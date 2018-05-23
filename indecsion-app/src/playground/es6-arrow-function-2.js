
const add = (a,b) => {
  return a + b;
}

console.log('regular anonymous function', add(4,5));

// standard syntax of method
const user = {
  name : 'Jan',
  age : 30,
  cities : ['Hier','Da','Nirgendwo'],
  placesLived: function () {this.cities.forEach(city => {
    console.log(name + ' has lived in ' + city);
  });}
}
console.log('number one');
user.placesLived();

// short syntax of method
const userTwo = {
  name : 'Jan',
  age : 30,
  cities : ['Hier','Da','Nirgendwo'],
  placesLivedTwo() {this.cities.forEach(city => {
    console.log(name + ' has also lived in ' + city);
  });}
}
console.log('number two');
userTwo.placesLivedTwo();

// short syntax of method but using map instead of foreach
const userThree = {
  name : 'Jan',
  age : 30,
  cities : ['Hier','Da','Nirgendwo'],
  placesLivedThree() {
    const cityMessages = this.cities.map(city => {
      console.log(name + ' has also lived in ' + city);
    });
    return cityMessages;
  }
}
console.log('number three');
userThree.placesLivedThree();


const multiplyObj = {
  numbers : [2,3,4,6],
  multipliedBy : 5,
  multiply() {
    return this.numbers.map(number => number*multipliedBy);
  }
}
console.log('number four');
console.log(multiplyObj.multiply());

