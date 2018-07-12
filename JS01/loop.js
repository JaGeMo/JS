// for loop

for(let i = 0; i < 10; i++) {
  console.log("for i: " + i);
  if(i === 5){ break;}
}

let j = 0;
while (j < 10) {
  console.log("while j: " + j);
  j++;
}

// for
let vegetables = ['beans', 'potatoes', 'carots'];
for(let i = 0; i < vegetables.length; i++) {
  console.log("veggie1[" + i + "]:  " + vegetables[i])
}

// for each
vegetables.forEach((vegetable,index, array) => {
  console.log("veggie2[" + index + "]:  " + vegetable);
  console.log(array);
  }
)

// map
const students = [
  {id: 1, name: "Jan"},
  {id: 2, name: "Matthias"},
  {id: 3, name: "Mat"}
]

const ids = students.map((student)=> {
  return student.id;
})
console.log(ids);

// for in
const person = {
  id: 1,
  firstName: 'Jan',
  surName: 'Moe',
  age: 40,
  address: {
    city: 'L.E.',
    street: 'None'
  },
  hobbies: ['coding','reading'],
  getBirthYear: function(){
    return 2018 - this.age;
  }
}

console.log(person.firstName);
console.log(`${person.address.city}`);
console.log(`${person.hobbies[0]}`);
console.log(`${person.hobbies[1]}`);
console.log(`${person.age}`);
console.log(`${person.getBirthYear}`);


for( let x in person ){
  console.log(`${x}: ${person[x]}`);
}
