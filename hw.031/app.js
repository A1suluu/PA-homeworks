let numbersTwo = []
let numbersThree = []

let a = Number(prompt("Введите 1-е число:"))
let b = Number(prompt("Введите 2-е число:"))
let c = Number(prompt("Введите 3-е число:"))
let d = Number(prompt("Введите 4-е число:"))
let e = Number(prompt("Введите 5-е число:"))
let f = Number(prompt("Введите 6-е число:"))
let g = Number(prompt("Введите 7-е число:"))

if( a % 2 ) {
    numbersTwo.push(a)
} if (a % 3) {
    numbersThree.push(a)
}
if( b % 2 ) {
    numbersTwo.push(b)
} if (b % 3) {
    numbersThree.push(b)
}
if( c % 2 ) {
    numbersTwo.push(c)
} if (c % 3) {
    numbersThree.push(c)
}
if( d % 2 ) {
    numbersTwo.push(d)
} if (d % 3) {
    numbersThree.push(d)
}
if( e % 2 ) {
    numbersTwo.push(e)
} if (e % 3) {
    numbersThree.push(e)
}
if( f % 2 ) {
    numbersTwo.push(f)
} if (f % 3) {
    numbersThree.push(f)
}
if( g % 2 ) {
    numbersTwo.push(g)
} if (g % 3) {
    numbersThree.push(g)
}

console.log(numbersTwo, numbersThree)

