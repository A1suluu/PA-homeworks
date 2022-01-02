let myArray = [ 63, 25, 56, 76, 90]

let a = Number (prompt())

while (a !== 0) {
    if (myArray.includes(a)) {  //(myArray in a)
        console.log ("Есть")
    } else {
        console.log ("Нет")
    }
    a = Number(prompt())
}


