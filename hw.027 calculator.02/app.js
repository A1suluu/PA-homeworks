let widthofroom = prompt ("Ширина комнаты")
let length = prompt ("Длина комнаты")
let height = prompt ("Высота комнаты")
// let widthofRoll = prompt ("Ширина рулона")
// let lengthofRoll = prompt ("Длина рулона")
let s = 2*(Number(widthofroom) + Number(length)) * Number(height)

// console.log("Общая площадь всех стен:" + Number(widthofroom) + Number(length) + Number(height) + "м2")
console.log(("Общая площадь всех стен: ") + (s) + ("м2"))