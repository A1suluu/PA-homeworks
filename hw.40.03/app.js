document.addEventListener("DOMContentLoaded", () => {
    const inputElem = document.querySelector("input");
    const resultDiv = document.querySelector("#result")

    inputElem.addEventListener("input", calc)
})

function calc() {
    let symbolIndex = 0;
    let text = document.querySelector("input").value;

    for(let i = 0; i < text.length; i++) {
        if("+-*/".includes(text[i])) {
            symbolIndex = i
        }
    } 
    const firstNum = Number(text.slice(0, symbolIndex));
    const secondNum = Number(text.slice(symbolIndex+1, text.length));

    if(text[i] === "+") const result = firstNum + secondNum
    else if(text[i] === "-") const result = firstNum - secondNum
    else if(text[i] === "*") const result = firstNum * secondNum
    else if(text[i] === "/") const result = firstNum / secondNum
    else if(text[i] === "**") const result = firstNum ** secondNum
    else if(text[i] === "**") const result = firstNum ** ( 1 / secondNum)

document.querySelector("div").innerHTML = result
}