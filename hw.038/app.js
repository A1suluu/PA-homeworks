let maxNum = 0

function myMax (arr) {
    let maxNum = arr[0];

    for (let i = 0; i < arr.length; i++){
        if ( maxNum < arr[i]) {
            maxNum = arr[i]
        }
    }
    return maxNum 
}


let b = [12, 15, 4, 80, -10]

console.log(myMax(b))
