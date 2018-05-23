'use strict';

var add = function add(a, b) {
  return a + b;
};

console.log('regular anonymous function', add(4, 5));

// standard syntax of method
var user = {
  name: 'Jan',
  age: 30,
  cities: ['Hier', 'Da', 'Nirgendwo'],
  placesLived: function placesLived() {
    this.cities.forEach(function (city) {
      console.log(name + ' has lived in ' + city);
    });
  }
};
console.log('number one');
user.placesLived();

// short syntax of method
var userTwo = {
  name: 'Jan',
  age: 30,
  cities: ['Hier', 'Da', 'Nirgendwo'],
  placesLivedTwo: function placesLivedTwo() {
    this.cities.forEach(function (city) {
      console.log(name + ' has also lived in ' + city);
    });
  }
};
console.log('number two');
userTwo.placesLivedTwo();

// short syntax of method but using map instead of foreach
var userThree = {
  name: 'Jan',
  age: 30,
  cities: ['Hier', 'Da', 'Nirgendwo'],
  placesLivedThree: function placesLivedThree() {
    var cityMessages = this.cities.map(function (city) {
      console.log(name + ' has also lived in ' + city);
    });
    return cityMessages;
  }
};
console.log('number three');
userThree.placesLivedThree();

var multiplyObj = {
  numbers: [2, 3, 4, 6],
  multipliedBy: 5,
  multiply: function multiply() {
    return this.numbers.map(function (number) {
      return number * multipliedBy;
    });
  }
};
console.log('number four');
console.log(multiplyObj.multiply());
