let i = 0, j = 0;
let n = prompt("Введите число");
let freeSpace = "", rightStars = "", leftStars = "\\", innerSpace = "";


while (i < n) {
  freeSpace = " "
  rightStars = "/"
  innerSpace += " "
  
  
  for (j = 0; j < n - i; j++)  {
    freeSpace +=  " "
  }; 
  
  for (j = 0; j < 1; j++) { 
      innerSpace += "*"
  }; 

  i++;
  console.log(freeSpace + rightStars + innerSpace + leftStars );
}









