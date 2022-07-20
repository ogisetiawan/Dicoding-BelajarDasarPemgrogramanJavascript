const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200
}
const mail = {
  //? object
  from: "pengirim@dicoding.com",
  sendMessage: function (msg, to) {
    //? property function
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  },
};
// ? memastikan bhawa object coffeStock diexport di node modules 
// module.exports = coffeeStock; //? jika ingin export 1 obj
// module.exports = {coffeeStock, mail};
// export default coffeeStock; //? mengunakan keyword ini jika package json ssudah ditambhkan type: module
export {coffeeStock, mail}; //? jika 2