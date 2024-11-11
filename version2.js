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
const previousExpression = document.getElementById("previousExpression")  

let currentExpretionCode = ""
let currentExpretionDisplay = ""
// let result = ""

function appendDigit(digit){
    currentExpretionCode += digit
    currentExpretionDisplay += digit
    updateDisplay()
}

function updateDisplay(){
    display.value = currentExpretionDisplay
}


//sound
const sound = new Audio("nochance.mp3")
const soundFiles = [sound, sound, sound]

function playRandomSound(){
    const randomIndex = Math.floor(Math.random()*soundFiles.length)
    soundFiles[randomIndex].play()

}


one.addEventListener("click", () => {
    appendDigit("1")
    playRandomSound()
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
    currentExpretionCode += "+"
    currentExpretionDisplay += " + "
})
minus.addEventListener("click", () => {
    currentExpretionCode += "-"
    currentExpretionDisplay += " - "
})
times.addEventListener("click", () => {
    currentExpretionCode += "*"
    currentExpretionDisplay += " × "
})
divide.addEventListener("click", () => {
    currentExpretionCode += "/"
    currentExpretionDisplay += " ÷ "
})
point.addEventListener("click", () => {
    appendDigit(".")
})

squared.addEventListener("click", () => {
    currentExpretionCode += ""
    currentExpretionDisplay += "²"
})

root.addEventListener("click", () => {
    currentExpretionCode += ""
    currentExpretionDisplay += "√"
})

negate.addEventListener("click", () => {

    currentExpretionDisplay += "-"
    currentExpretionCode += "-"
    updateDisplay()
})

equals.addEventListener("click", () => {
    const result = eval(currentExpretionCode)
    display.value = result
    previousExpression.value = currentExpretionDisplay

    currentExpretionCode = result
    currentExpretionDisplay = result
})


allClear.addEventListener("click", () => {
    currentExpretionCode = ""
    currentExpretionDisplay = ""
    previousExpression.value = ""
    display.value = ""
})





// const playButton = document.getElementById("audio")

// const sound = new Audio("test.mp3")

// playButton.addEventListener( "click", () => {
//     sound.play()
// })