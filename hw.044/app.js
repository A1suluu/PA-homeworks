document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("input")
    const lightOf = document.getElementById("light")
    const partOflamp = document.getElementById("firstPart")
    let counter = 0
    
    btn.addEventListener("click", () => {
        if (counter == 0) {
                lightOf.style.backgroundColor = "yellow"
                partOflamp.style.background = "yellow"
                counter = 1
            } else {
                lightOf.style.backgroundColor = "grey"
                partOflamp.style.background = "grey"
                counter = 0
            }
        })
        
    })










    


    
    //    const inputElem = document.getElementsByTagName("input")
    //    let turnOfColor = inputElem.createRadialGradient(50%,50,5,90,60,100);
    //    function turnOf () {
    //        if(inputElem.onclick) {
    //            inputElem.style.boxshadow = none
    //            //inputElem.style.background = radial-gradient (circle at 50% 40%,white 20%, gray 50%)
    //        }
    //    }