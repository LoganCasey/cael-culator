const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const times = document.getElementById("times")
const divide = document.getElementById("divide")
const equals = document.getElementById("equals")
const squared = document.getElementById("squared")
const root= document.getElementById("root")
const negate = document.getElementById("negate")
const point = document.getElementById("point")
const allClear = document.getElementById("all-clear")
const display = document.getElementById("display")

let currentNumberString = ""
let secondNumberString = ""
let savedNumber = 0
let currentOperation = ""
let expectingNewNumber = false

function appendDigit(digit){
    if (expectingNewNumber){
        currentNumberString = ""
        expectingNewNumber = false
    }
    currentNumberString += digit
    updateDisplay()
}

function updateDisplay(){
    display.value = currentNumberString
}


one.addEventListener("click", () => {
    appendDigit("1")
})
two.addEventListener("click", () => {
    appendDigit("2")
})
three.addEventListener("click", () => {
    appendDigit("3")
})
four.addEventListener("click", () => {
    appendDigit("4")
})
five.addEventListener("click", () => {
    appendDigit("5")
})
six.addEventListener("click", () => {
    appendDigit("6")
})
seven.addEventListener("click", () => {
    appendDigit("7")
})
eight.addEventListener("click", () => {
    appendDigit("8")
})
nine.addEventListener("click", () => {
    appendDigit("9")
})
zero.addEventListener("click", () => {
    appendDigit("0")
})
plus.addEventListener("click", () => {
    currentOperation = "+"
    expectingNewNumber = true
    //save number
    savedNumber = Number.parseFloat(currentNumberString)
})
minus.addEventListener("click", () => {
    appendDigit("-")
})
times.addEventListener("click", () => {
    appendDigit("×")
})
divide.addEventListener("click", () => {
    appendDigit("÷")
})
point.addEventListener("click", () => {
    appendDigit(".")
})

squared.addEventListener("click", () => {

    //convert to sting
    const number = Number.parseFloat(currentNumberString)

    // do the math
    const result  = number * number

    //updade display
    currentNumberString = result.toString()
    updateDisplay()
})

root.addEventListener("click", () => {

    //convert to sting
    const number = Number.parseFloat(currentNumberString)

    // do the math
    const result  = Math.sqrt(number)

    //updade display
    currentNumberString = result.toString()
    updateDisplay()
})

negate.addEventListener("click", () => {

    //convert to sting
    const number = Number.parseFloat(currentNumberString)

    // do the math
    const result  = number * -1

    //updade display
    currentNumberString = result.toString()
    updateDisplay()
})

equals.addEventListener("click", () => {
    //convert to string
    const number = Number.parseFloat(currentNumberString)
    let result

    //do the math
    if(currentOperation==="+"){
        result = savedNumber + number
    }

    //updade display
    currentNumberString = result.toString()
    updateDisplay()
})


allClear.addEventListener("click", () => {
    currentOperation = ""
    savedNumber = 0
    expectingNewNumber = false
    currentNumberString = ""
    updateDisplay()
})





// const playButton = document.getElementById("audio")

// const sound = new Audio("test.mp3")

// playButton.addEventListener( "click", () => {
//     sound.play()
// })