// let widthofroom = prompt ("Ширина комнаты")
// let length = prompt ("Длина комнаты")
// let height = prompt ("Высота комнаты")

// let s = 2*(Number(widthofroom) + Number(length)) * Number(height)

// console.log(("Общая площадь всех стен: ") + (s) + ("м2"))



let n = Number(prompt())

let part1 = ''
let part2 = ''
let part3 = ''

let point1 = 0
let point2 = 0

for ( let i = 0; i < n; i++ ) {
    part1 = ''
    part2 = ''
    part3 = ''

    point1 = n - i
    point2 = n + i

    for ( let k = 0; k < point1; k++ ) {
        part1 += ' '
    }
    part1 += '/'

    for ( let l = point1; l < point2; l++ ) {
        part2 += ' '
    }

    part3 += '\\'
    for ( let m = point2; m < n; m++ ) {
        part3 += ' '
    }

    console.log(part1 + part2 + part3   )
}