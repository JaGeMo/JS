var nameVar = 'nameVarValue';
console.log('nameVar', nameVar);

let nameLet = 'nameLetValue';
console.log('nameLet', nameLet);

var fullName = "Jan Moennig";

let firstName2;

if(fullName) {
  var firstName = fullName.split(' ')[0];
  firstName2 = fullName.split(' ')[0];
  console.log('first name: ',firstName2);
}

// console.log('first name: ',firstName);
// console.log('first name: ',firstName2);