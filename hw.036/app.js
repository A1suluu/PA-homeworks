let i = 1, j = 1;
let userHeight = prompt("Введите число");
let freeSpace = "", stars = "", leftStars = "", innerSpace = "", leftSpace = "";


while (i < userHeight) {
  freeSpace = "";
  stars = "";
  for (j = 0; j < userHeight - i; j++) {
      freeSpace += " "
    }; 
  for (j = 0; j < 1 ; j++) { 
      stars += "/"
    };
  for (j = 1; j < 2 ; j++) { 
      innerSpace += " "
    };
  for (j = 0; j < 1 ; j++) { 
      leftStars += "\\"
    }; 
//  for (j = 1; j < 2 ; j++) { 
//       leftSpace += "^"
//     };   


  console.log(freeSpace + stars + innerSpace + leftStars );
  i++;
}



/*
1. создаем две переменные с первоначальным значением 1. 
2. создаем промпт, куда пользователь вводит число.
3. создаем четвертую переменную, которая отвечает за свободное место в консоли.
   создаем пятую переменную, в которой будут звездочки
4. создаем цикл While c условием, что i меньше введенной пользователем цифрой.
то есть наш цикл заканчивается на этом числе.
5. заносим две переменные, так как они явялются внутренними переменными.
6. создаем второй цикл for, где j = 0; - значит с какой строки консоли 
начать цикл, j < userHeight - i; - допустим пол-во число это 6,
 далее j меньше 6 и отнимаем на одно число меньше , получается 5.
 То есть цикл freeSpace += "*", будум находиться только 5 строк
 
 7. 
*/




// for (j = 0; j < 2 * i + 1; j++) stars += "*";
// freeSpace = "", stars = "", i = 0;
// for (j = 0; j < max - i; j++) freeSpace += " ";
// console.log(freeSpace + stars);
