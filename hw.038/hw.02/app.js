// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
//   }
  
//   user.go()


// 2

// let obj, method;

// obj = {
//   go: function() { console.log(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// method = {
//     userName: "katte",
//     showName: function () { console.log(this.userName); }
// }

// f = obj.showName;             // вычисляется выражение (переменная f ссылается на код функции)
// f()


// 3

// function makeUser() {
//     return {
//       name: "Джон",
//       ref: this
//     };
//   };
  
//   let user = makeUser();
  
//   console.log( user.ref.name ); 
//   console.log(user.name)


// 4


// Создайте объект calculator (калькулятор) с тремя методами:


let calculator = {
  firstN: Number(prompt()),
  secondN: Number(prompt()),
  sum: function () {
      return this.firstN + this.secondN
  },
  mul: function() {
      return this.firstN * this.secondN
  }
};


console.log( calculator.sum() );
console.log( calculator.mul() );


// 5
