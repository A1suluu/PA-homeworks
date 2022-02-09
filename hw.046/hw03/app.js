document.addEventListener("DOMContentLoaded", () => {
    const userTime = document.getElementById("time")
    const timeBtn = document.getElementById("remakeTime")
    const startBtn = document.getElementById("start")
    const stopBtn = document.getElementById("stop")
    const upDateBtn = document.getElementById("update")
    const saveBtn = document.getElementById("saveTime")
    let timeId = null 

  timeBtn.addEventListener("click", () => {
    timeBtn.innerText = "установлено"
    userTime.innerHTML = Number(prompt())
})

startBtn.addEventListener("click", () => {
    timeId = setInterval(startTime, 100)
    startBtn.innerText = "запущено"
    startBtn.setAttribute('disabled');
})

stopBtn.addEventListener("click", () => {
    clearInterval(timeId)
    stopBtn.innerText = "остановлено"
    startBtn.removeAttribute('disabled');

})
upDateBtn.addEventListener("click", () => {
    location.reload()
    upDateBtn.innerText = "успешно"
    }) 



function startTime () {
    let num = Number(userTime.innerText)

    num-- 
    userTime.innerHTML = num

    if (num === 0 ) { clearInterval(timeId)}
}
 })