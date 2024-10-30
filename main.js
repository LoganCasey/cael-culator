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

let firstNumber = ""
let secondNumber = ""
let currentOperation = ""

one.addEventListener("click", () => {
    display.value += "1"
})
two.addEventListener("click", () => {
    display.value += "2"
})
three.addEventListener("click", () => {
    display.value += "3"
})
four.addEventListener("click", () => {
    display.value += "4"
})
five.addEventListener("click", () => {
    display.value += "5"
})
six.addEventListener("click", () => {
    display.value += "6"
})
seven.addEventListener("click", () => {
    display.value += "7"
})
eight.addEventListener("click", () => {
    display.value += "8"
})
nine.addEventListener("click", () => {
    display.value += "9"
})
zero.addEventListener("click", () => {
    display.value += "0"
})
plus.addEventListener("click", () => {
    display.value += "+"
})
minus.addEventListener("click", () => {
    display.value += "-"
})
times.addEventListener("click", () => {
    display.value += "×"
})
divide.addEventListener("click", () => {
    display.value += "÷"
})



allClear.addEventListener("click", () => {
    display.value = ""
})





// const playButton = document.getElementById("audio")

// const sound = new Audio("test.mp3")

// playButton.addEventListener( "click", () => {
//     sound.play()
// })