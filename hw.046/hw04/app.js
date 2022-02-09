document.addEventListener("DOMContentLoaded", () => {
    const userTime = document.getElementById("time")
    const timeBtn = document.getElementById("remakeTime")
    const startBtn = document.getElementById("start")
    const saveBtn = document.getElementById("saveTime")
    const stopBtn = document.getElementById("stop")
    let timeId = null

    let currentTime = userTime.innerText
    localStorage.setItem("timeToSave", currentTime)
    userTime.innerText = currentTime


    if(localStorage.getItem("timeToSave")) {
        userTime.innerText = localStorage.getItem("timeToSave") 
        startTimer(timeId)
    } else {
        userTime.innerText = timeId
    }
    timeBtn.addEventListener("click", () => {
        timeBtn.innerText = "установлено"
        userTime.innerHTML = Number(prompt())

    })
    
    startBtn.addEventListener("click", () => {
        timeId = setInterval(startTimer, 1000)
        startBtn.innerText = "запущено"
    })
    
    saveBtn.addEventListener("click", () => {
        startBtn.setAttribute('disabled', true);
        userTime.innerHTML = localStorage.getItem()
    })

    stopBtn.addEventListener("click", () => {
        clearInterval(timeId)
        stopBtn.innerText = "остановлено"
        startBtn.removeAttribute('disabled');
    
    })
    function startTimer () {
        let num = Number(userTime.innerText)
        num--
        userTime.innerHTML = num
        if (num === 0 ) { clearInterval(timeId)}
    }
})