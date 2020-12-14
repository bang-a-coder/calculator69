let inputScreen = document.querySelector(`.input`)
let resultScreen = document.querySelector(`.result`)

let numButtons = document.querySelectorAll(".number")
let operButttons = document.querySelectorAll(`.operator`)

let clearButton = document.getElementById(`clear`)
let backspaceButton = document.querySelector(`#backspace`)
let equalButton = document.querySelector(`#equal`)

let toDo = []
let input = ``                                                        // temporary thingy to keep inputs between operators

let result = 0
resultScreen.innerHTML = `0`

for (i = 0; i < numButtons.length; i++) {                       //Number eventListerner set
    numButtons[i].addEventListener(`click`, function() {
        inputScreen.innerHTML += `${this.id.toString()}`
        input += this.id
    })
}

for (i = 0; i < operButttons.length; i++){                      //Operator eventListenser set
    operButttons[i].addEventListener(`click`, function() {
        inputScreen.innerHTML += this.id
        input += this.id
    })
}

clearButton.addEventListener(`click`, function(){               //Clean screen eventListerner Set
    inputScreen.innerHTML = ''
    input = ``
    toDo = []
    result = 0
    resultScreen.innerHTML = `0`
})

backspaceButton.addEventListener(`click`, function() {             // BACKSPACE
    input = input.slice(0, -1)
    inputScreen.innerHTML = inputScreen.innerHTML.slice(0, -1)
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
    const numbers = numbersString.map(noStr => +noStr);
	const quotient = numbers.reduce((result, no) => {
        return result / no});                 // Buggy shit, gives slitly worng number
    
    return quotient;
}

function doMath(array) {
    for (i=0; i < array.length; i++) {
        if (array[i] && array[i].includes(`*`)) {                  // has to be this way cause the second argument isn't recognised on its own for some reason
            result += multiplication(array[i])
        } else if (array[i] && array[i].includes(`/`)){
            result += division(array[i])
        }
        else {
            result += parseInt(array[i])
        }
    }

    return result
}

function execute(a){
    const negativeAdj = a.replaceAll(`-`,`+-`)
        console.log(negativeAdj)
    const numbersString = negativeAdj.split(`+`)
        console.log(numbersString)

    resultScreen.innerHTML = doMath(numbersString)
}

equalButton.addEventListener(`click`, function() {              //RUN CALCULATION
    execute(input)
})