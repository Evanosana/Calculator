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
const equalButton = document.getElementById("equals")
let decimalCheck = 0
let numCheck = 0
let operatorChoice = 0
let numOne = 0
let stringNumOne = ""
let numTwo = 0  
let stringNumTwo = "" 
let answer = 0
let finalAnswer = ""
console.log("decimalCheck = " + decimalCheck)

let visual = document.getElementById("answer")

function clearFieldZero(){
    visual.innerText = "0"
    decimalCheck = 0
    numCheck = 0
    numOne = 0
    numTwo = 0
    stringNumOne = ""
    stringNumTwo = ""
}
function clearFieldAll(){
    visual.innerText = ""
}
function operatorCheck(char){
    return char === "÷" || char === "x" || char === "-" || char === "+" || char === "."
}

clearButton.addEventListener("click", () => {
    clearFieldZero()
})

equalButton.addEventListener("click", () => {
    numOne = parseInt(stringNumOne)
    numTwo = parseInt(stringNumTwo)
    let operators = ["/", "*", "-", "+"]

    for(let i = 0; i < operators.length; i++){
        if(operatorChoice === i + 1){
            if(operators[i] === "/"){
                answer = numOne / numTwo
            }
            if(operators[i] === "*"){
                answer = numOne * numTwo
            }
            if(operators[i] === "-"){
                answer = numOne - numTwo
            }
            if(operators[i] === "+"){
                answer = numOne + numTwo
            }
            break
        }
    }
    finalAnswer = String(answer)
    visual.innerText = finalAnswer
    decimalCheck = 0
    numCheck = 0
    numOne = answer
    numTwo = 0
    stringNumOne = String(answer)
    stringNumTwo = ""

    console.log(numOne)
    console.log(numTwo)
    console.log(answer)
    console.log(finalAnswer)
})















divisionButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        return
    }
    visual.innerText += "÷"
    decimalCheck = 0
    numCheck = 1
    operatorChoice = 1
    console.log(operatorChoice)
})

multiplicationButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        return
    }
    visual.innerText += "x"
    decimalCheck = 0
    numCheck = 1
    operatorChoice = 2
    console.log(operatorChoice)
})

subtractionButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        return
    }
    visual.innerText += "-"
    decimalCheck = 0
    numCheck = 1
    operatorChoice = 3
    console.log(operatorChoice)
})

additionButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        return
    }
    visual.innerText += "+"
    decimalCheck = 0
    numCheck = 1
    operatorChoice = 4
    console.log(operatorChoice)
})





decimalButton.addEventListener("click", () => {
    if(operatorCheck(visual.innerText.slice(-1)) || decimalCheck === 1){
        return
    }
    visual.innerText += "."
    decimalCheck = 1
    console.log(decimalCheck)
})





oneButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "1"
    if(numCheck === 0){
        stringNumOne += 1
    }
    else{
        stringNumTwo += 1
    }
})
twoButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "2"
    if(numCheck === 0){
        stringNumOne += 2
    }
    else{
        stringNumTwo += 2
    }
})
threeButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "3"
    if(numCheck === 0){
        stringNumOne += 3
    }
    else{
        stringNumTwo += 3
    }
})
fourButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "4"
    if(numCheck === 0){
        stringNumOne += 4
    }
    else{
        stringNumTwo += 4
    }
})
fiveButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "5"
    if(numCheck === 0){
        stringNumOne += 5
    }
    else{
        stringNumTwo += 5
    }
})
sixButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "6"
    if(numCheck === 0){
        stringNumOne += 6
    }
    else{
        stringNumTwo += 6
    }
})
sevenButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "7"
    if(numCheck === 0){
        stringNumOne += 7
    }
    else{
        stringNumTwo += 7
    }
})
eightButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "8"
    if(numCheck === 0){
        stringNumOne += 8
    }
    else{
        stringNumTwo += 8
    }
})
nineButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll()
    }
    visual.innerText += "9"
    if(numCheck === 0){
        stringNumOne += 9
    }
    else{
        stringNumTwo += 9
    }
})
zeroButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return
    }
    visual.innerText += "0"
    if(numCheck === 0){
        stringNumOne += 0
    }
    else{
        stringNumTwo += 0
    }
})



const yessir = document.getElementById("yessir")

yessir.addEventListener("click", () => {
    console.log("numCheck = " + numCheck)
    console.log("finalAnswer in string = " + finalAnswer)
    console.log("first = " + stringNumOne)
    console.log("second = " + stringNumTwo)
    console.log("visualLength = " + visual.innerText.length)
    if(decimalCheck === 0){
        console.log("Decimals: none")
        return
    }
    console.log("Decimals: yes")
})