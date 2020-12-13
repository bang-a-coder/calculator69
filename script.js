let inputScreen = document.querySelector(`.input`)
let resultScreen = document.querySelector(`.result`)

let numButtons = document.querySelectorAll(".number")
let operButttons = document.querySelectorAll(`.operator`)

let clearButton = document.getElementById(`clear`)
let backspaceButton = document.getElementById(`backspace`)
let equalButton = document.querySelector(`#equal`)

let toDo = []
let input = ``                                                        // temporary thingy to keep inputs between operators

let result = 0
resultScreen.innerHTML = `0`

for (i = 0; i < numButtons.length; i++) {                       //Number eventListerner set
    numButtons[i].addEventListener(`click`, function() {
        inputScreen.innerHTML += `${this.id.toString()}`
        input += this.id
        console.log(input)
    })
}

for (i = 0; i < operButttons.length; i++){                      //Operator eventListenser set
    operButttons[i].addEventListener(`click`, function() {
        inputScreen.innerHTML += this.id
        if (this.id === `+`) {
            toDo.push(input)
            input = ``
        } else {
            input += this.id
        }
    })
}

clearButton.addEventListener(`click`, function(){               //Clean screen eventListerner Set
    inputScreen.innerHTML = ''
    input = ``
    toDo = []
    result = 0
    resultScreen.innerHTML = `0`
})

function multiplication(expression) {
	const numbersString = expression.split('*');
	const numbers = numbersString.map(noStr => +noStr);
	const initialValue = 1.0; 
	const product = numbers.reduce((acc, no) => acc * no, initialValue);
	return product;
}

function division(expression) {
    const numbersString = expression.split('/');
        console.log(numbersString)
    const numbers = numbersString.map(noStr => +noStr);
        console.log(numbers)
    const initialValue = 1.0; 
        console.log(numbers[0])
	const quotient = numbers.reduce((result, no) => {
        console.log(result , no)
        return result / no});                 // Buggy shit, gives slitly worng number
        return quotient;
}


function operate(a){
    if (input != ``) {
        toDo.push(input)
    }

    for (i=0; i < a.length; i++) {
        if (a[i] && a[i].includes(`*`)) {                  // has to be this way cause the second argument isn't recognised on its own for some reason
            result += multiplication(a[i])
        } else if (a[i] && a[i].includes(`/`)){
            result += division(a[i])
        }
        else {
            result += parseInt(a[i])
        }
    }
    resultScreen.innerHTML = result
}

equalButton.addEventListener(`click`, function() {              //RUN CALCULATION
    operate(toDo)
})

window.addEventListener(`keydown`, clickButton)

function clickButton(e) {
    
}
