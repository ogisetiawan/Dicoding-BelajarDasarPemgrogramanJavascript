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
    return a; //? closure call var global
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

//@ Object Oriented Programming (OOP)
const mail = {
  //? object
  from: "pengirim@dicoding.com",
  sendMessage: function (msg, to) {
    //? property function
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  },
};
mail.sendMessage("apakabar", "penerima@dicoding.com");
mail.saveContact = (add) => {
  //? add new function
  console.log("email saved " + add);
};
mail.saveContact("test");

//~ Class
function Mail() {
  (this.from = "pengirim@dicoding.com"), //? def property
    (this.sendMessage = function (msg, to) {
      //? property fuction
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
    });
}

Mail.prototype.sendMessage2 = function n(msg, to) {
  //? menambahkan function pada class mail dengan prototype dan n
  console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

const mail1 = new Mail(); //? instance class
mail1.sendMessage2("hallo", "penerima@dicoding.com"); //? call method/function
console.log(mail1.hasOwnProperty("sendMessage2")); //? false jika kita menggunakan propotype

//~ Property and Method
this._contacts = [];
class Mail {
  constructor(...numbers) {
    this._contacts = [numbers];
    this.from = "pengirim@dicoding.com";
  }
  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }
  static isValidPhone(phone) {
    //? static class
    console.log(phone);
  }
}
const mail2 = new Mail(); //? instance class
Mail.isValidPhone(9234); //? without instance class
mail2.sendMessage("hallo", "penerima@dicoding.com");
const mail3 = new Mail(085000111222); // misalkan untuk SMS
console.log(mail3);

//~ Class Inheritance
class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }
  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }
  showAllContacts() {
    //? method di dalam class dibungkus dan bersifat privat
    return this._contacts;
  }
}

class WhatsApp extends Mail {
  constructor(author) {
    super(author); //? memanggil constructor parent dan hanya dapat digunakan di constructor
    this.username = "dicoding";
    this.isBussinessAccount = true;
  }
  myProfile() {
    return `my name ${this.username}, is ${
      this.isBussinessAccount ? "Business" : "Personal"
    }`;
  }
}

const wa1 = new WhatsApp("080111000222"); //? set value super(authour) pada constructor class whastapp
console.log(wa1.myProfile()); //? call method from child class
console.log(wa1.sendMessage("pesan", "ogi")); //? call class from parent class and property from will set super(author)
console.log(wa1.showAllContacts()); //

//~ Overriding Method
class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }

  sendMessage(msg, to) {
    console.log(`by parent classs: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }

  showAllContacts() {
    return this._contacts;
  }
}

class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, phoneNumber) {
    super(phoneNumber);
    this.username = username;
    this.isBussinessAccount = isBussinessAccount;
  }
  sendMessage(msg, to) {
    //? overiding total class parent sendmessage
    super.sendMessage(msg, to); //? call method pada parent class
    console.log(`by child class: ${msg} to ${to} from ${this.from}`);
  }
}

const wa1 = new WhatsApp("dicoding", true, "6281111111");
const mail = new Mail("ogi");
console.log(wa1.from); //? karena sudah tergantikan dengan overriding constructor pada child class
console.log(mail.from); //? tidak tergantikan karena memanggil class parent
console.log(wa1.sendMessage("child", "ogi"));

//~ Object Composition
// [1] list of abstractions
const canSendMessage = (self) => ({
  sendMessage: () => console.log("send message:", self.message),
});
const checkIsValidPhone = (self) => ({
  isValid: () => console.log("valid phone", self.from),
});
// [2] crate object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
  const self = {
    from,
    message,
    store,
  };
  // [4] method
  const personalEnterpriseBehaviors = (self) => ({
    createCatalog: () => console.log("Catalog has created: ", self.store),
  });
  // [5] create object composition
  return Object.assign(
    self,
    personalEnterpriseBehaviors(self),
    canSendMessage(self),
    checkIsValidPhone(self)
  );
};
const pe1 = personalEnterprise(
  "pengirim@gmail.com",
  "hei produk baru nih",
  "Dicoding Store"
);
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih

//~ Build in Class
const myAge = (birthday) => {
  //? object arrow function
  const birtday = new Date(birthday);
  const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
  const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
  const diffDate = new Date(diff_ms);
  return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
};

console.log(myAge("2000-01-22")); // 21 tahun

class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }

  sendMessage(msg, to) {
    console.log(`by parent classs: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }

  showAllContacts() {
    return this._contacts;
  }
}

class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, phoneNumber) {
    super(phoneNumber);
    this.username = username;
    this.isBussinessAccount = isBussinessAccount;
  }
  sendMessage(msg, to) {
    //? overiding total class parent sendmessage
    super.sendMessage(msg, to); //? call method pada parent class
    console.log(`by child class: ${msg} to ${to} from ${this.from}`);
  }
}

//~ Quiz OOP
class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}
class Rabbit extends Animal {
  constructor(name, age, isMammal) {
    super(name, age, true);
  }
  eat() {
    return `${this.name} sedang makan!`;
  }
}
class Eagle extends Animal {
  constructor(name, age, isMammal) {
    super(name, age, false);
  }
  fly() {
    return `${this.name} sedang terbang!`;
  }
}
const myRabbit = new Rabbit("Labi", 2);
myRabbit.eat();
console.log(myRabbit.eat());
const myEagle = new Eagle("Elo", 4);
myEagle.fly();
console.log(myEagle.fly());
