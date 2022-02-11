document.addEventListener("DOMContentLoaded", () => {
    const plusBtn = document.querySelector("button")
    const resultDiv = document.querySelector("div")
    let result = 0 
    
    plusBtn.addEventListener("click", calculate)
    
    function calculate () {
    const num1 = Number(document.getElementById("firstIn").value)
    const num2 = Number(document.getElementById("secondIn").value)
    result = num1 + num2
    resultDiv.innerText = result
    console.log(resultDiv)
}

})