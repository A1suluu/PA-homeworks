let first_number = Number (prompt("Первое число:"))
let operator = prompt("Действие")
let second_number = Number(prompt("Второе число"))

if (operator === "-") {
    alert(first_number - second_number)
} else if (operator === "+") {
    alert (first_number + second_number)
} else if (operator === "*") {
    alert(first_number * second_number)
} else if (operator === ":") {
    alert (first_number / second_number)
}else if (operator === "**") {
    alert(first_number ** second_number)
} else if (operator === "%") {
    alert (first_number % second_number)
} else {
    alert("ERROR!")
} 