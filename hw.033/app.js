let m3 = []
let m5 = []

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        m3.push(i)
    }
} 

for (let i = 1; i < 100; i++) {
    if ( i % 5 === 0) {
        m5.push(i)
    }
}
console.log(m3, m5)