let inputScreen = document.querySelector(`.input`)
let resultScreen = document.querySelector(`.result`)

let numButtons = document.querySelectorAll(".number")
let operButttons = document.querySelectorAll(`.operator`)

let clearButton = document.getElementById(`clear`)
let backspaceButton = document.getElementById(`backspace`)
let equalButton = document.getElementById(`equal`)

for (i = 0; i < numButtons.length; i++) {                       //Number eventListerner set
    numButtons[i].addEventListener(`click`, function() {
        inputScreen.innerHTML += `${this.id.toString()}`
    })
}

for (i = 0; i < operButttons.length; i++){                      //Operator eventListenser set
    operButttons[i].addEventListener(`click`, function() {
        inputScreen.innerHTML += `${this.id.toString()}`
    })
}

clearButton.addEventListener(`click`, function(){               //Clean screen eventListerner Set
    inputScreen.innerHTML = ''
})



function operate(calculation){
    
}