document.addEventListener("DOMContentLoaded", () => {

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const upDateBtn = document.getElementById("update")
const elem = document.getElementById("time") 
const bcgrDiv = document.querySelector("div")
const bcgrBody = document.querySelector("body")




let timeId = null


function pomodoro () 
{
    const timeText = document.getElementById("minutes")
    let num = Number(elem.innerText)
    
    num--
    elem.innerText = num
    
    if (num < 5 ) 
    {
        timeText.innerText = "минуты"
    } else 
    {
        timeText.innerText = "минут"
    };

    if (num === 0) 
    {
        timeText.innerText = "минут"
        clearInterval(timeId)
    }
}

startBtn.addEventListener("click", () => {
    timeId = setInterval(pomodoro, 1000)
    startBtn.innerText = "запущено"
    startBtn.setAttribute('disabled',true);
   
    // startBtn.disabled = true;                     option 2
    
})
stopBtn.addEventListener("click", () => {
    clearInterval(timeId)
    stopBtn.innerText = "остановлено"
    startBtn.removeAttribute('disabled', false);
    bcgrDiv.style.backgroundColor = "#313186"
    bcgrBody.style.backgroundColor = "#090974"

    // startBtn.disabled = false;                    option 2
    

})
upDateBtn.addEventListener("click", () => {
    location.reload()
    upDateBtn.innerText = "успешно"
    }) 
})


