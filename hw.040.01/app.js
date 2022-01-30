// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
// }


 // Используя оператор ?:

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }


// Используя оператор || (самый короткий вариант):

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }



// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

  function min(a, b) {
      if(a < b) {
          return a;
      } else {
          return b;
      }
  }


 


function pow(x, n) {
    return(x ** n)
}

let x = Number (prompt());
let n = Number (prompt());


if (n < 1) {
    console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
}

console.log(pow(x, n))




