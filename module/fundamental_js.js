//@ FUNDAMENTAL JAVASCRIPT
// ~ BIGINT
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

//~ STRING
//? menggunakan escape string untuk mengurangi ambiguitas dalam tanda petik
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);

const myName = "Luke";
console.log("Hello, my name is ${myName}.");

//~ SYMBOL
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);

//~ LOOP
//? FOR of LOOP ECMAScript 2015 (ES6)
let arrs = ["Luke", "Han", "Chewbacca", "Leia"];
for (const arrayItem of arrs) {
  //? loop by ES6 (2015), tanpa hitung length untuk statement
  console.log(arrayItem);
}

//@ Struktur Data
//~ Array
const arr = ["Coklat", 42.5, 22, true, "Programming"];
arr.push("new"); //? add new array
console.log(arr);
arr.pop(); //? remove last array
arr.shift(); //? remove first array
arr.unshift("Apple"); //? add first data array
console.log(arr);
delete arr[1]; //? delete index 1 array
console.log(arr);
arr.splice(2, 2); //? delete dari index ke-2 sebanyak 2 elemen selanjutnya
console.log(arr);

//~ Spread Operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorites); //? output tidak dalam bentuk array

//~ Destructuring object
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};
const { firstName, lastName, age, isMale = "Laki" } = profile; //? destructuring dari property object profile
console.log(firstName, lastName, age, isMale);

//~ Destructuring array
const food = ["Seafood", "Salad", "Nugget", "Soup"];
const [firstFood, secondFood, thirdFood, fourthFood] = food; //? destructuring dari sebuah index array
const [, , threeFood] = food; //? menentukan index tertentu
console.log(firstFood);
console.log(threeFood);

//~ Destructuring Assignment
let a = 1;
let b = 2;
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
[a, b] = [b, a]; //? tanpa membuat variable sementara untuk menampung nilai yang akan diswap
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

//~ Map
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);
console.log(capital);
console.log(capital.size); //? length map
console.log(capital.get("London")); //? get property value london
capital.set("New Delhi", "India"); //? add new property
console.log(capital.size); //? lenght map
console.log(capital.get("New Delhi"));
//~ Quiz Map
const priceInJPY = 5000;
let priceInIDR;
// TODO
const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);
priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR);

//~ Set
const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add([1, 2]); //? element baru dari property
numberSet.delete(1); //? tidak ada index jadi bisa delete dengan valuenya
console.log(numberSet); //? akan membuang 1 dan 4 because duplicate

//~ WeakMap & WeakSet
const { inspect } = require("util"); //? function

let visitsCountMap = new WeakMap(); //? Menyimpan daftar user
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
let jonas = { name: "Jonas" };
countUser(jonas); //? Menambahkan user "Jonas"
jonas = null; //? Data object "Jonas" dihapus

//? delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

//@ FUNCTION
const user = {
  //? define object
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
};
const introduce = function ({ displayName, fullName }) {
  //? function declare and call param from property object
  console.log(`${displayName} is ${fullName}`);
};
introduce(user); //? call function with assigment object

//~ Rest Parameter
function sum(...numbers) {
  //? spread array iitarable
  let result = 0;
  for (let number of numbers) {
    //? loop
    result += number;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5)); //? call function with array param

//~ Arrow function
const sum = (...numbers) => {
  let result = 0;
  for (let number of numbers) {
    //? loop
    result += number;
  }
  return result;
};
console.log(sum(1, 2, 3, 4, 5)); //? call function with array param

const multiply = (a, b) => a * b; //? tanpa {} dan return
console.log(multiply(3, 4));

//~ Variable Scope
const a = "a"; //? var global

let parent = () => {
  return () => {
    return a; //? closure
  };
};
let parents = parent(); //? variable asssigment karena ada closure ( function bersarang)
console.log(parents());

//~ Quiz Function
const minimal = (a, b) => {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else {
    return a;
  }
};
const power = (a, b) => a ** b;

console.log(minimal(45, 45));
console.log(power(7, 3));
