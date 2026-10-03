const aboutMe = {
  name: "Maki",
  age: 23,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi! I'm ${this.name}, and I am ${this.age} years old.`);
  }
};
 
aboutMe.hobby = "Dancing";
aboutMe.introduce();
