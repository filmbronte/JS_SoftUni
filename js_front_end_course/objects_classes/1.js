function personInfo(firstName, lastName, age) {
  // let person = {firstName: '', lastName: '',age: ''};
  // person.firstName = firstName;
  // person.lastName = lastName;
  // person.age = Number(age);
  age = Number(age);
  let person = { firstName, lastName, age };
  return person;
}

console.log(personInfo("Peter", "Pan", "20"));
