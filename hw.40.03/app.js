document.addEventListener("DOMContentLoaded", () => {
    const inputElem = document.querySelector("input");
    inputElem.addEventListener("input", calculate)
})

function calculate() {
    let symbolIndex = 0;
    let text = document.querySelector("input").value;

    for(let i = 0; i < text.length; i++) {
        if("+-/*".includes(text[i])) {
            symbolIndex = i
        }
    } 
    const firstNum = Number(text.slice(0, symbolIndex));
    const secondNum = Number(text.slice(symbolIndex+1, text.length));
    let result = 0
    
    if(text[symbolIndex] == "+")  result = firstNum + secondNum
    else if(text[symbolIndex] == "-")  result = firstNum - secondNum
    else if(text[symbolIndex] == "*")  result = firstNum * secondNum
    else if(text[symbolIndex] == "/")  result = firstNum / secondNum
    else if(text[symbolIndex] == "**")  result = firstNum ** secondNum
    else if(text[symbolIndex] == "**")  result = firstNum ** ( 1 / secondNum)

    document.querySelector("div").innerText = result
}