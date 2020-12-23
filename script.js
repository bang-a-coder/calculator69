let inputScreen = document.querySelector(`.input`)
let resultScreen = document.querySelector(`.result`)

let numButtons = document.querySelectorAll(".number")
let operButttons = document.querySelectorAll(`.operator`)

let clearButton = document.getElementById(`clear`)
let backspaceButton = document.querySelector(`#backspace`)
let equalButton = document.querySelector(`#equal`)

let input = ``                                                        // temporary thingy to keep inputs between operators
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
    console.clear()
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
        return result / no});                 
    
    return quotient;
}

function squareRoot(expression) {
    let cleaned = expression.replace('√', '')
    return Math.sqrt(cleaned)
}

function doMath(a) {
    console.log(a)
    const negativeAdj = a.replaceAll(`-`, `+-`) 
    const array = negativeAdj.split(`+`) 

    let result = 0
    for (i=0; i < array.length; i++) {
        if (array[i] && array[i].includes(`*`)) {                  // has to be this way cause the second argument isn't recognised on its own for some reason
            result += multiplication(array[i])
        } else if (array[i] && array[i].includes(`/`)){
            result += division(array[i])
        } else if (array[i] && array[i].includes(`√`)) {
            result += squareRoot(array[i])
            console.log(array[i])
            console.log(typeof(array[i]))
        } else {
            result += parseInt(array[i])
        }
        console.log(`result = ` + result)
    }
    return result
}

function parenthDetective(str) {
    if (str.indexOf("(") == -1) return null

    let holder = null
    let array = []

    for (i=0; i < str.length; i++){
        if (str[i] === "(") {
            if (!holder) {
                holder = 0
                array[0] = i
            }
            holder += 1
        } else if (str[i] === ")") {
            holder -= 1

            if (holder === 0) {
                array[1] = i
                return array
            }
        } 
    }
    return array
}

function replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

function operate(a){
    let pd = parenthDetective(a)
    if (pd == null) return doMath(a)

    let trip = operate(a.slice(pd[0]+1, pd[1]))
    return operate(replaceRange(a, pd[0], pd[1] + 1, trip.toString()))
}

equalButton.addEventListener(`click`, function() {              //RUN CALCULATION
    resultScreen.innerHTML = operate(input)
})
