let inputScreen = document.querySelector(`.input`)
let resultScreen = document.querySelector(`.result`)

let numButtons = document.querySelectorAll(".number")
let operButttons = document.querySelectorAll(`.operator`)

let clearButton = document.getElementById(`clear`)
let backspaceButton = document.getElementById(`backspace`)
let equalButton = document.getElementById(`equal`)

let toDo = [3,5*3,-10/2]   //3+5*3-10/2
let input = ``// temporary thingy to keep inputs between operators

for (i = 0; i < numButtons.length; i++) {                       //Number eventListerner set
    numButtons[i].addEventListener(`click`, function() {
        inputScreen.innerHTML += `${this.id.toString()}`
        input += this.id
        console.log(input)
    })
}

for (i = 0; i < operButttons.length; i++){                      //Operator eventListenser set
    operButttons[i].addEventListener(`click`, function() {
        inputScreen.innerHTML += `${this.id.toString()}`

        if (this.id === `+`) {
            toDo.push(input.slice(0,-1))
            input = ``
        }





    })
}

clearButton.addEventListener(`click`, function(){               //Clean screen eventListerner Set
    inputScreen.innerHTML = ''
})

equalButton.addEventListener(`click`, function() {
    operate()
})



function operate(calculation){  
    inputScreen.innerHTML += null
}