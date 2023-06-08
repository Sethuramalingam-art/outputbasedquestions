output based question important call apply bind with settimeout

var star = "Rajni";
setTimeout(function () {
  const star = "kamal";
  const data = {
    star: "suriya",
    getStar() {
      return this.star;
    },
  };

  console.log(data.getStar()); //suriya'

  console.log(data.getStar.call(this)); // undefined because it is a normal function and this will always point to function where it is inside but settimout is part of global object so it won't take settimeout so it is undefined
}, 0);

var star = "Rajni";
setTimeout(() => {
  const star = "kamal";
  const data = {
    star: "suriya",
    getStar() {
      return this.star;
    },
  };

  console.log(data.getStar()); //suriya'

  console.log(data.getStar.call(this)); // undefined because it is a arrow function and this will always point to function where it is inside but settimout is part of global object so it won't take settimeout so it is undefined
}, 0);

==========================================================================================

output based question important

const age = 20;

var person = {
  name: "sethu",
  age: 30,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
console.log(person.getAge.call(person2)); // 24 because it refering person2 object
console.log(person.getAge.bind(person2)()); // 24 because it refering person2 object
console.log(person.getAge.apply(person2)); // 24 because it refering person2 object

//==================================================================================

output based question important

function x() {
  console.log(this);
}

const y = () => {
  console.log(this); // arrow function dont have own this keyword
};

console.log(x()); /// global object
console.log(y()); // {}

===================================================================================

ouput based question  - Append an array to another array using apply

const array = ["a", "b"];
const elements = [1, 2, 3, 4];

//array.push(elements);

array.push.apply(array, elements);

console.log(array); //[ 'a', 'b', 1, 2, 3, 4 ]

=========================================================================================

ouput based question  - Find the min/max number in array using apply

const numbers = [5, 3, 4, 534, 2, 34];

console.log(Math.max(...numbers)); // 34

console.log(Math.max(numbers)); // NaN

const maxValue = numbers.reduce((acc, com) => {
  return (acc = acc < com ? com : acc);
}, 0); // 534

console.log(Math.max.apply(null, numbers)); // 534 same use min as well

==========================================================================================

bound function

function f() {
  console.log(this); // window object
}

let user = {
  g: f.bind(null),
};

console.log(user.g());

================================================================================================

Bind chaning is not there in Javascript

function f() {
  console.log(this.name);
}

f = f.bind({ name: "john" }).bind({ name: "ram" }); // it will return john no ram because bind chaning is not there

f();

==================================================================================================

arrow function and normal function different

let age = 10;
console.log(this);
var person = {
  name: "sethu",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };

console.log(person.getAgeArrow.call(person2)); // arrow function it will check with near normal function else it will check with window object. window object dont have age property
console.log(person.getAge.call(person2)); // normal function so 24
