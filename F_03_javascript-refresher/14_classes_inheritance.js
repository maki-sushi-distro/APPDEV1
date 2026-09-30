class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log("Konnichiwa! " + this.name + "-desu");
  }
}

class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

const studentName = new Student("Hinata");
studentName.sayHello();
studentName.study();
