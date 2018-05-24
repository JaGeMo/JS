class Person {
  constructor(name = 'unknown', age = 0) {
    this.name = name;
    this.age = age;
  }

  getDescription () {
    return (`${this.name} is ${this.age} old .. `)
  }
}

class Student extends Person {
  constructor(name = 'unknown', age = 0, grade = 'unknown', major) {
    super(name, age);
    this.grade = grade;
    this.major = major;
  }

  getGrade () {
    return (`${this.name}'s grade is ${this.grade}`)
  }

  hasMajor () {
    return !!this.major;
  }

  getDescription () {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }

    return description;
  }
}

let me = new Person('JanM',32);
let student = new Student('JanM',32,'good')
let student2 = new Student('Tester',38,'good','Economics')

console.log(me,student);
console.log(me.getDescription());
console.log(student.getGrade());
console.log(student.hasMajor());
console.log(student2.hasMajor());
console.log(student2.getDescription());



const render = ()=> {
  let template = (
    <p>Initial Check</p>
  )
  let testRoot4 = document.getElementById('app4');
  ReactDOM.render(template,testRoot4);
}

render();