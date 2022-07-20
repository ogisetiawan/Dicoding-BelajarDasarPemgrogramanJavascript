console.log("npm run start ogi");
//? npm init
//? node index.js 
//? inpm run start [property] // bsa set di package json

//~ Module ES6 Export & Import
// const {coffeeStock, mail} = require('./state'); //? require memanggil bbrpa object dari state.js
// import {coffeeStock, mail as email}  from './state.js'; //? ES6 Import
import {coffeeStock}  from './state.js'; //? ES6 Import

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
 
makeCoffee("arabica", 80);
// email.sendMessage('test', 'ogisetiawan')
 