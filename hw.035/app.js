

//Пользователь вводит числа и ваша программа должна отвечать "Есть",
// если введённое число есть в массиве и "Нет" если отсутствует
//Пользователь продолжает вводить до тех пор, пока не введёт ноль

let myArray = [ 63, 25, 56, 76, 90]

let a = Number (prompt("Введите число"))

while (a !== 0) {
    if (myArray.includes(a)) {  
        console.log ("Есть")
    } else {
        console.log ("Нет")
    }
    a = Number(prompt())             // как этот код влияет на программу и почему программа лагает, если ее убрать?
}