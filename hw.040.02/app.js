document.addEventListener("DOMContentLoaded", (event)=> {
    const num0 = document.getElementById("number_0")
    const num1 = document.getElementById("number_1")
    const num2 = document.getElementById("number_2")
    const num3 = document.getElementById("number_3")
    const num4 = document.getElementById("number_4")
    const num5 = document.getElementById("number_5")
    const num6 = document.getElementById("number_6")
    const num7 = document.getElementById("number_7")
    const num8 = document.getElementById("number_8")
    const num9 = document.getElementById("number_9")
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const multipliedBy = document.getElementById("multipliedBy")
    const dividedBy = document.getElementById("dividedBy")
    const degree = document.getElementById("degree")
    const root = document.getElementById("root")
    
    const allNumbers = document.querySelector(".numbers")
    const buttons = document.querySelector(".buttons")
    const signs = document.querySelector(".signs")
    const result = document.getElementById("result")
    const equal = document.getElementById("equal")
    const key = event.target.textContent;

   
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const action = ['-', '+', 'X', '/'];

    buttons.onclick = (event) => {
        if (allNumbers.inludes(key)) {
            
        }
    }

})































