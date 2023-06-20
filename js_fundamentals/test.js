function hello() {
  console.log("hello world");
}
// hello();

function solve(input) {
  console.log(input[0]);
  console.log(input[1]);
  console.log(input[2]);
}
// solve([1, 2, 3])
function readtext(input) {
  let name = input[0];
  console.log(name);
}
// readtext(["hello"]);

function readnumber(input) {
  let number = Number(input[0]);
  console.log(number);
}
// readnumber([65]);

function calc_area(input) {
  let a = Number(input[0]);
  let area = a * a;
  console.log(area);
}

// calc_area([10]);

function greet_by_name(input) {
  let name = input[0];
  let greeting = "Hello, " + name + "!";
  console.log(greeting);
}

// greet_by_name(["Victoria"])

function sum(a, b) {
  return a + b;
}

// console.log(sum(10, 5));

function formatting_example() {
  let name = "Victoria";
  let age = 22;
  console.log(`My name is ${name} and I'm ${age} years old.`);
}

// formatting_example();

function convert_to_string(number) {
  console.log(number.toFixed(2)); // formats to 2nd decimal and converts to string
}

// convert_to_string(3.555);

function data_types() {
  let number = 10; //number
  let person = { name: "George", age: 25 }; //object
  let array = [1, 2, 3]; //array
  let isTrue = true; //boolean
  let name = "George"; //string
  let empty = null; //null
  let unknown = undefined; //undefined
}

function loop(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
//
// loop(5);

function printtypeof(input) {
  console.log(typeof input);
}

// printtypeof([4, 5, 2]);
function comparison(a, b) {
  console.log(a == b);
  console.log(a === b);
}
// comparison(1, '1')

// let name = 'George';
// if (name) {
//     console.log('Declared');
// }

function array() {
  let numbers = [1, 2, 3];
  let [first, second, third] = numbers;
  console.log(first);
  console.log(second);
  console.log(third);
  let others = [7, 8, 9];
  let new_numbers = [1, 2, 3, ...[4, 5, 6], ...others]; // "..." unpacks the array
  console.log(new_numbers);
}
//
// array()
function solve2(name, ...otherParameters) {
  console.log(otherParameters);
}

//for-of loop
// let numbers = [1, 2, 3, 4];
// for (const num of numbers) {
//     console.log(num);
// }

function separator(array) {
  console.log(array.join(", "));
}

// separator(['joe', 'sam', 'george'])

let matrix = [[1, 2, 3], [4, 5], [6, 7, 8], [9, 10], [11]];
// console.table(matrix);

function pop_items(array) {
  array.pop();
  console.log(array);
}

// pop_items([1, 2, 3, 4, 5]);

function remove_first_item(array) {
  let first = array.shift(); // removes first item
  console.log(first); //returns the removed item
  console.log(array);
}

// remove_first_item(['Joe', 'Sam', 'Billy']);

function addNumberAtStart(array) {
  array.unshift(0);
  console.log(array);
}

// addNumberAtStart([1, 2, 3, 4, 5]);

function addNumberLast(array) {
  array.push(6);
  array.push(...[7, 8, 9]);
  console.log(array);
}

// addNumberLast([1, 2, 3, 4, 5]);

function slicing(array) {
  let mySlice = array.slice(array.length / 2);
  console.log(mySlice);
}

// slicing([1, 2, 3, 4, 5, 6])

function splicing(array) {
  let toInsert = [-1, 0];
  let deletedItems = array.splice(0, 2, ...toInsert); //3rd argument used to insert new items
  console.log(deletedItems);
  console.log(array);
}

// splicing([1, 2, 3, 4, 5, 6]);

//map

let nums = [1, 2, 3, 4, 5, 6];
let transformation = nums.map((num) => num * 2);
// console.log(transformation);

// filter

let even = nums.filter((num) => num % 2 === 0);
// console.log(even);

function padStart(string) {
  console.log(string.padStart(8, "0")); //adds 8 zero's to start of string
}
// padStart('80');

function padEnd(string) {
  console.log(string.padEnd(8, "0")); //adds 8 zeros to end of str
}

// padEnd('80 ');

// if (typeof 'str' === 'string') {
//     console.log("its a string");
// }

// sorting

function sortArray(array) {
  array.sort((a, b) => {
    // let result = aNum - bNum;
    // console.log(result);
    return a - b;
  });
  console.log(array);
}

// sortArray([31, 2, 423, 32, 5, -1]);

function sortStrings(array) {
  let sortAsc = [...array].sort((aName, bName) => {
    let result = aName.localeCompare(bName); // sorts every single char, for dec - swap aname and bname
    return result;
  });
  console.log(sortAsc);
}

// sortStrings(["asadsd", 'urnjgrnsj', 'dadakd', 'aaaaaaaa']);

function swapElements(array) {
  for (let i = 0; i < array.length / 2; i++) {
    swap(array, i, array.length - 1 - i);
  }
  console.log(array.join(" "));
  function swap(elements, i, j) {
    let temp = elements[i];
    elements[i] = elements[j];
    elements[j] = temp;
  }
}

function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  return helloMessage() + name;
}

// console.log(greeting(sayHello, 'Viki'));

let person = {
  firstName: "Pesho",
  lastName: "Petrov",
  age: 20,
  sayHey: function () {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
};

//  console.log(person.sayHey());
//  console.log(Object.keys(person));
//  console.log(Object.values(person));
//  console.log(Object.entries(person));

//  const keys = Object.keys(person);
//  for (const key of keys) {
//     console.log(`Key: ${key}`)
//     console.log(`Value: ${person[key]}`);
//  }

//  const tuples = Object.entries(person)
//     .forEach(([key, value]) => console.log(key, value));
//  for (const [key, value] of tuples) {
//     console.log(`Key: ${key}, Value: ${value}`);
//  }

//sorting helper

// const compareNumbers = {
//     ascending: (a, b) => a - b;
//     descending: (a, b) => b - a;
// };

// switch replacement
let count = 5;

const commandParser = {
  increment: (count) => ++count,
  decrement: (count) => --count,
  reset: () => 0,
};

// console.log(commandParser.increment(count));
// console.log(commandParser.decrement(count));
// console.log(commandParser.reset(count));

// let text = JSON.stringify(person);
// console.log(text);
// let obj = JSON.parse(text);

function namesPrint() {
  let names = ["John", "Dan", "Katy", "Sam", "Trevor"];

  for (let i = 0; i < names.length; i++) {
    console.log(`Hello my name is ${names[i]}`);
  }
}

// namesPrint();


function foreachMethod(array) {
  let copy = [];

  array.forEach(item => { copy.push(item); });
  array.forEach(el => { console.log(el); });

  console.log(copy);
}

// foreachMethod([2, 3, 4, 1])

function someMethod(array) {
  console.log(array.some(el => el % 5 == 0)); //returns boolean
}

// someMethod([1, 2, 3, 4, 5, 6])

function findFirst(array) {
  console.log(array.find(el => el % 2 == 0)); //returns first element
}

// findFirst([1, 2, 3, 4, 5, 6])

function filterElements(array) {
  console.log(array.filter(el => el % 2 == 0)); //returns all elements
}

filterElements([1, 2, 3, 4, 5, 6]);