document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("start")
    const stopBtn = document.getElementById("stop")
    const upDateBtn = document.getElementById("update")
    const elem = document.getElementById("time") 
    let timeId = null
    let userTime = Number(prompt())
 
    
    function pomodoro () 
    {
        const timeText = document.getElementById("minutes")
        let num = Number(userTime.innerText)
        
        num--
        userTime.innerText = num
        
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
    })
    stopBtn.addEventListener("click", () => {
        clearInterval(timeId)
        stopBtn.innerText = "остановлено"
        startBtn.removeAttribute('disabled', false);
    })
    upDateBtn.addEventListener("click", () => {
        location.reload()
        }) 
    })