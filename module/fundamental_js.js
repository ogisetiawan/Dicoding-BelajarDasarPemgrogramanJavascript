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
console.log(...favorites); //? output tidak dalam bentuk indexing array

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
console.log(sum(1, 2, 3, 4, 5)); //? call function with many param

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


//@ Functional Programming
//~ Higher-Order Function
const hello = () => {
  console.log('Hello1!')
};
const say = (someFunction) => {
  someFunction(); //? ini akan call function diatas karena kasih paramter hello yang sama dgn function hello()
}
const sayHello = () => {
    return () => {
        console.log('Hello3!');
    }
}
hello();
say(hello); 
sayHello()();


//~ Array Map
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark = names.map((name) => `${name}!`); //? tanpa menggunakan for kita bisa menambahkan ! pada value array
console.log(newNamesWithExcMark);

//~ Array Filter
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item)); //? menyaring array nilai falsy
console.log(truthyArray);
const students = [ //? array objct
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85); //? filter array yang score 85
const test = students.find(student => student.score > 85);
console.log(test);
console.log(eligibleForScholarshipStudents);
console.log(students[2].name);

//~ Aray Reduce
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0); //? callback accumltor dan new array student, 0 init value
console.log(totalScore);

//~ Array Find
const students = [ //? array objct
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];
const test = students.find(student => student.score > 85); //? berbeda dengan array.filter find mencari yg lebih spesifik dan hanya 1

//~ Array Sort
const array1 = [1, 30, 4, 1000];
const compareNumber = (a, b) => {
  return a - b; //? Jika, negative maka `a` akan diletakkan sebelum `b` dan Jika, positive maka `b` akan diletakkan sebelum `a`
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

//~ Array foreach
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
const newNamesWithExcMark = names.map((name) => `Hello, ${name}`); //? tanpa menggunakan for kita bisa menambahkan ! pada value array
console.log(newNamesWithExcMark);

//~ Quiz 
const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];
const salesBooks = books.filter((book) => book.sales >= 1000000); 
const greatAuthors = salesBooks.map((salesBook) => `${salesBook.author} adalah penulis buku ${salesBook.title} yang sangat hebat!`); 
console.log(greatAuthors);

//@ Error Handling
//~ Try Catch
try {
   console.log(1);
   ga_ada(); //? function does not available
   console.log(2);
} catch (error) {
  console.log("error ni"); //? error
  console.log(error.name); //? jenis error
  console.log(error.message); 
  console.log(error.stack); //? detail
} finally {
  console.log("Akan tetap dieksekusi");
}

//~ Throwing Errors
let json = '{ "name": "Yoda", "age": 20 }';
try {
    let user = JSON.parse(json);
    if (!user.name) {
      throw new SyntaxError("'name' is required."); //? if we do not use throw user.age will still run
    }
    errorCode;
    console.log(user.age);  //? 20
} catch (error) {
  if (error instanceof SyntaxError) { //? instanceof can type of error
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
      console.log(error.message);
  } else {
      console.log(error.stack);
  }
}

//~ Quiz  
// TODO 1
class ValidationError extends Error {
  constructor(message) {
      super(message);
      this.name = "ValidationError";
  }
}
// TODO 2
function validateNumberInput(a,b,c){
  if(typeof(a) !== "number"){
    throw new ValidationError("Argumen pertama harus number")
  }else if(typeof(b) !== "number"){
    throw new ValidationError("Argumen kedua harus number")
  }else if(typeof(c) !== "number"){
    throw new ValidationError("Argumen ketiga harus number")
  }
}

const detectTriangle = (a, b, c) => {
  try{
    validateNumberInput(a,b,c)
    
    if (a === b && b === c ) {
      return 'Segitiga sama sisi';
    }
    if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
    }
    
    return 'Segitiga sembarang';
  }catch(error){
    if (error instanceof ValidationError){
      return `${error.message}`;
    } 
  }
}

console.log(detectTriangle(false,2,3));
console.log(detectTriangle(1,false,3));
console.log(detectTriangle(1,2,false));


//@ Concurency
//~ Asyncrounous
console.log("Selamat datang!"); //?1
setTimeout(() => { //? wait untul 3 sec
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?"); //? while wait the top code, the porcess wil excute

//~ Callback
const orderCoffee = callback  => {
  let coffee = null;
  console.log("Sedang membuat kopi, silakan tunggu...");
  //? Async
  setTimeout(() => {
      coffee = "Kopi sudah jadi!";
      callback(coffee) //? if not use callback, coffe still null
  }, 3000);
}

orderCoffee(kopi => { //? param kopi is callback
  console.log(kopi); 
});

//~Promise
const executorFunction = (resolve, reject) => { //? Executor function
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat"); //? bentuk object
  } else {
      reject("Mesin kopi tidak bisa digunakan");
  }
}

const makeCoffee = () => { 
  return new Promise(executorFunction); //? call promise
}

const coffeePromise = makeCoffee();
console.log(coffeePromise);

//~ Consume Promise
const stock = {
  coffeeBeans: 250,
  water: 1000,
}

const checkStock = () => {
  return new Promise((resolve, reject) => {
      if (stock.coffeeBeans >= 16 && stock.water >= 250) {
          resolve("Stok cukup. Bisa membuat kopi");
      } else {
          reject("Stok tidak cukup");
      }
  });
};

//? function handler
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
}
checkStock()
  .then(handleSuccess) //? .then function handler, jika status awal promise pending
  .catch(handleFailure) //? with method .catch

//~ Chaining Promise ( berantai promise/izin )
const state = { //
  stock: {
      coffeeBeans: 250,
      water: 1000,
  },
  isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
  return new Promise((resolve, reject) => { //? promise mesin coffe
      setTimeout(() => {
          if (!state.isCoffeeMachineBusy) {
              resolve("Mesin kopi siap digunakan.");
          } else {
              reject("Maaf, mesin sedang sibuk.");
          }
      }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => { //? promise stock coffe
      state.isCoffeeMachineBusy = true;
      setTimeout(() => {
          if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
              resolve("Stok cukup. Bisa membuat kopi.");
          } else {
              reject("Stok tidak cukup!");
          }
      }, 1500);
  });
};

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...")
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Kopi sudah siap!")
      }, 2000);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
      console.log("Memanaskan air...");
      setTimeout(() => {
          resolve("Air panas sudah siap!");
      }, 2000);
  })
}

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
      console.log("Menggiling biji kopi...");
      setTimeout(() => {
          resolve("Kopi sudah siap!");
      }, 1000);
  })
}

function makeEspresso() { //? promise function
  checkAvailability()
      .then((value) => { 
          console.log(value); //? value is from return checkAvalibity()
          return checkStock();
      })
      .then((value) => { //? value is from checkStock()
          console.log(value)
          return brewCoffee();
      })
      .then(value => {
        console.log(value+'brewCoffe');
        const promises = [boilWater(), grindCoffeeBeans()]; //? call promise secara bersamaan
        return Promise.all(promises); 
    })
      .then(value => {
          console.log(value);
          state.isCoffeeMachineBusy = false;
      })
      .catch(rejectedReason => {
          console.log(rejectedReason);
          state.isCoffeeMachineBusy = false;
      });
}
makeEspresso();

//~ Async Wait
const getCoffee = () => { //? object promise
  return new Promise((resolve, reject) => {
      const seeds = 11;
      setTimeout(() => {
          if (seeds >= 10) {
              resolve("Kopi didapatkan!");
          } else {
              reject("Biji kopi habis!");
          }
      }, 1000);
  })
}

async function makeCoffee() { //? tell that makecoffe as async
  // getCoffee().then(coffee => { //? promise getCoffe()
  //     console.log(coffee);
  // });
  //? call object promise async wait
  try {
    const coffee = await getCoffee(); //? await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve
    console.log(coffee);
  }catch(reject){
    console.log(reject);
  }
}

makeCoffee();