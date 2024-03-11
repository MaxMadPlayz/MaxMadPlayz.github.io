
const up1 = document.getElementById("up1")
const increase = document.getElementById("AcBTn")
const display = document.getElementById("money_display")
var increment = 20
var money = 0



increase.onclick = function(){
    money += increment
    display.textContent =`$${money}`
}

up1.onclick = function(){
    if(money >= 250){
        money -= 250
        increment = Math.round(increment *= 1.25)
        display.textContent =`$${money}`
    }
}

