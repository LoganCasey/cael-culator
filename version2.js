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
const digitSoundProbability = 0.1
const operatorSoundProbability = 0.2
const specialSoundProbability = 0.3

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
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
two.addEventListener("click", () => {
    appendDigit("2")
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
three.addEventListener("click", () => {
    appendDigit("3")
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
four.addEventListener("click", () => {
    appendDigit("4")
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
five.addEventListener("click", () => {
    appendDigit("5")
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
six.addEventListener("click", () => {
    appendDigit("6")
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
seven.addEventListener("click", () => {
    appendDigit("7")
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
eight.addEventListener("click", () => {
    appendDigit("8")
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
nine.addEventListener("click", () => {
    appendDigit("9")
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
zero.addEventListener("click", () => {
    appendDigit("0")
    if(Math.random <= digitSoundProbability){
        playRandomSound()
    }
})
plus.addEventListener("click", () => {
    currentExpretionCode += "+"
    currentExpretionDisplay += " + "
    if(Math.random <= operatorSoundProbability){
        playRandomSound()
    }
})
minus.addEventListener("click", () => {
    currentExpretionCode += "-"
    currentExpretionDisplay += " - "
    if(Math.random <= operatorSoundProbability){
        playRandomSound()
    }
})
times.addEventListener("click", () => {
    currentExpretionCode += "*"
    currentExpretionDisplay += " × "
    if(Math.random <= operatorSoundProbability){
        playRandomSound()
    }
})
divide.addEventListener("click", () => {
    currentExpretionCode += "/"
    currentExpretionDisplay += " ÷ "
    if(Math.random <= operatorSoundProbability){
        playRandomSound()
    }
})
point.addEventListener("click", () => {
    appendDigit(".")
    if(Math.random <= specialSoundProbability){
        playRandomSound()
    }
})

squared.addEventListener("click", () => {
    currentExpretionDisplay += "²"
    const numbers = currentExpretionCode.split(/[\+\-\*\/]/)
    let lastNumber = numbers[numbers.length-1]

    currentExpretionCode = currentExpretionCode.slice(0, currentExpretionCode.length - lastNumber.length)
    const result = lastNumber*lastNumber
    currentExpretionCode += result.toString()
    console.log(currentExpretionCode)
    updateDisplay()

    if(Math.random <= operatorSoundProbability){
        playRandomSound()
    }
})

root.addEventListener("click", () => {
    const numbers = currentExpretionCode.split(/[\+\-\*\/]/)
    let lastNumber = numbers[numbers.length-1]

    currentExpretionCode = currentExpretionCode.slice(0, currentExpretionCode.length - lastNumber.length)
    const result = Math.sqrt(lastNumber)
    currentExpretionCode += result.toString()
    console.log(currentExpretionCode)
    //add √ before squared number
    
    currentExpretionDisplay = currentExpretionDisplay.slice(0, currentExpretionDisplay.length - lastNumber.length)
    currentExpretionDisplay += `√ ${lastNumber}`
    updateDisplay()

    if(Math.random <= operatorSoundProbability){
        playRandomSound()
    }
})

negate.addEventListener("click", () => {

    currentExpretionDisplay += "-"
    currentExpretionCode += "-"
    updateDisplay()

    if(Math.random <= specialSoundProbabilitySoundProbability){
        playRandomSound()
    }
})

equals.addEventListener("click", () => {
    const result = eval(currentExpretionCode)
    display.value = result
    previousExpression.value = currentExpretionDisplay

    currentExpretionCode = result
    currentExpretionDisplay = result

    if(Math.random <= operatorSoundProbability){
        playRandomSound()
    }
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