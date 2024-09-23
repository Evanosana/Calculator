const oneButton = document.getElementById("one")
const twoButton = document.getElementById("two")
const threeButton = document.getElementById("three")
const fourButton = document.getElementById("four")
const fiveButton = document.getElementById("five")
const sixButton = document.getElementById("six")
const sevenButton = document.getElementById("seven")
const eightButton = document.getElementById("eight")
const nineButton = document.getElementById("nine")
const zeroButton = document.getElementById("zero")
const decimalButton = document.getElementById("decimal")
const positiveNegativeButton = document.getElementById("positiveNegative")
const clearButton = document.getElementById("clear")
const divisionButton = document.getElementById("division")
const multiplicationButton = document.getElementById("multiplication")
const subtractionButton = document.getElementById("subtraction")
const additionButton = document.getElementById("plus")


let visual = document.getElementById("answer")

function clearFieldZero(){
    visual.innerText = "0"
}
function clearFieldAll(){
    visual.innerText = ""
}
function operatorCheck(char){
    return char === "÷" || char === "x" || char === "-" || char === "+" 
}

clearButton.addEventListener("click", () => {
    clearFieldZero()
})
divisionButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        return
    }
    visual.innerText += "÷"
})
multiplicationButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        return
    }
    visual.innerText += "x"
})
subtractionButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        return
    }
    visual.innerText += "-"
})
additionButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        return
    }
    visual.innerText += "+"
})



oneButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "1"
})
twoButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "2"
})
threeButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "3"
})
fourButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "4"
})
fiveButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "5"
})
sixButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "6"
})
sevenButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "7"
})
eightButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "8"
})
nineButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "9"
})
zeroButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    visual.innerText += "0"
})