let i = 1, j = 1;
let userHeight = prompt("Введите число");
let freeSpace = "", stars = "", leftStars = "";


while (i < userHeight) {
  freeSpace = "";
  stars = "";
  for (j = 0; j < userHeight - i; j++) {
      freeSpace += " "
    }; 
  for (j = 1; j < 2 * i + 1; j++) { 
      stars += "/"
    };

  console.log(freeSpace + stars);
  i++;
}

