// All of the buttons that are tangible from the website
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");
const decimalButton = document.getElementById("decimal");
const positiveNegativeButton = document.getElementById("positiveNegative");
const clearButton = document.getElementById("clear");
const divisionButton = document.getElementById("division");
const multiplicationButton = document.getElementById("multiplication");
const subtractionButton = document.getElementById("subtraction");
const additionButton = document.getElementById("plus");
const equalButton = document.getElementById("equals");
const clearConsole = document.getElementById("clearConsole");
const updateVisualText = document.getElementById("update");
const fetchData = document.getElementById("yessir");

// All of the "check for" variables which tell the code what is true currently
let decimalCheck = 0;
let numCheck = 0;
let operatorChoice = 0;
let numOne = 0;
let stringNumOne = "0";
let numTwo = 0;
let stringNumTwo = "";
let answer = 0;
let finalAnswer = "";
let decimalStop = 0;
let operatorType = "";

// The visual part of the calculator, it updates with every button press
let visual = document.getElementById("answer");

// Used to fully clear the screen and all of the true or false statements aswell
function clearFieldZero(){
    visual.innerText = "0";
    decimalCheck = 0;
    numCheck = 0;
    numOne = 0;
    numTwo = 0;
    operatorChoice = 0;
    stringNumOne = "0";
    stringNumTwo = "";
    finalAnswer = "";
    operatorType = "";
}
// Used when replacing the placeholder with the digit that was pressed
function clearFieldAll(){
    visual.innerText = "";
    stringNumOne = "";
    operatorChoice = 0;
}
// Used for true or false statements to decide if a button is allowed to be pressed
function operatorCheck(char){
    return char === "÷" || char === "x" || char === "-" || char === "+";
}
// Used for true or false statements but with decimals instead of operators
function dotCheck(char){
    return char === ".";
}
// Makes sure that the screen is always updated when a button is pressed or the calculation is updated
function updateVisual(){
    if(operatorChoice === 1){
        operatorType = "÷";
    }
    if(operatorChoice === 2){
        operatorType = "x";
    }
    if(operatorChoice === 3){
        operatorType = "-";
    }
    if(operatorChoice === 4){
        operatorType = "+";
    }
    visual.innerText = stringNumOne + operatorType + stringNumTwo;
}

// Calls their respective functions
clearButton.addEventListener("click", () => {
    clearFieldZero();
})

// Button to clear the console
clearConsole.addEventListener("click", () => {
    console.clear();
})
// Button to manually update the screen if the automatic method malfunctions
updateVisualText.addEventListener("click", () => {
    updateVisual();
})
// Prints all of the useful true or false statements to the console for debugging
fetchData.addEventListener("click", () => {
    console.log("numCheck = " + numCheck);
    console.log("finalAnswer in string = " + finalAnswer);
    console.log("first = " + stringNumOne);
    console.log("second = " + stringNumTwo);
    console.log("visualLength = " + visual.innerText.length);
    console.log("stopDuplicates = " + decimalStop);
    console.log("number = " + numCheck);
    console.log("operator = " + operatorChoice);
    if(decimalCheck === 0){
        console.log("Decimals: none");
    }
    else{
        console.log("Decimals: yes");
    }    
})

// Runs the calculation and updates the screen
equalButton.addEventListener("click", () => {
    numOne = parseFloat(stringNumOne);
    numTwo = parseFloat(stringNumTwo);
    let operators = ["/", "*", "-", "+"];

    for(let i = 0; i < operators.length; i++){
        if(operatorChoice === i + 1){
            if(operators[i] === "/"){
                answer = numOne / numTwo;
            }
            if(operators[i] === "*"){
                answer = numOne * numTwo;
            }
            if(operators[i] === "-"){
                answer = numOne - numTwo;
            }
            if(operators[i] === "+"){
                answer = numOne + numTwo;
            }
            break
        }
    }
    finalAnswer = String(answer);
    visual.innerText = finalAnswer;
    decimalCheck = 0;
    numCheck = 0;
    numOne = answer;
    stringNumOne = String(answer);
})


// When the divide button is pressed, update the screen and the true or false statements
divisionButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return;
    }
    if(dotCheck(visual.innerText.slice(-1))){
        return;
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        visual.innerText = visual.innerText.slice(0, -1);
        visual.innerText += "÷";
        decimalCheck = 0;
        numCheck = 1;
        operatorChoice = 1;
        return;
    }
    visual.innerText += "÷";
    decimalCheck = 0;
    numCheck = 1;
    operatorChoice = 1;
})

// When the multiplication button is pressed, update the screen and the true or false statements
multiplicationButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return;
    }
    if(dotCheck(visual.innerText.slice(-1))){
        return;
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        visual.innerText = visual.innerText.slice(0, -1);
        visual.innerText += "x";
        decimalCheck = 0;
        numCheck = 1;
        operatorChoice = 2;
        return;
    }
    visual.innerText += "x";
    decimalCheck = 0;
    numCheck = 1;
    operatorChoice = 2;
})

// When the subtraction button is pressed, update the screen and the true or false statements
subtractionButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return;
    }
    if(dotCheck(visual.innerText.slice(-1))){
        return;
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        visual.innerText = visual.innerText.slice(0, -1);
        visual.innerText += "-";
        decimalCheck = 0;
        numCheck = 1;
        operatorChoice = 3;
        return;
    }
    visual.innerText += "-";
    decimalCheck = 0;
    numCheck = 1;
    operatorChoice = 3;
})

// When the addition button is pressed, update the screen and the true or false statements
additionButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return;
    }
    if(dotCheck(visual.innerText.slice(-1))){
        return;
    }
    if(operatorCheck(visual.innerText.slice(-1))){
        visual.innerText = visual.innerText.slice(0, -1);
        visual.innerText += "+";
        decimalCheck = 0;
        numCheck = 1;
        operatorChoice = 4;
        return;
    }
    visual.innerText += "+";
    decimalCheck = 0;
    numCheck = 1;
    operatorChoice = 4;
})



// When the decimal button is pressed, update the screen and the true or false statements
decimalButton.addEventListener("click", () => {
    if(decimalCheck === 1){
        return;
    }
    if(operatorCheck(visual.innerText.slice(-1)) || decimalCheck === 1){
        if(numCheck === 0){
            stringNumOne = "0.";
            visual.innerText += "0.";
        }
        else{
            stringNumTwo += "0.";
            visual.innerText += "0.";
            decimalStop = 0;
            decimalCheck = 1;
        }
        return
    }
    visual.innerText += ".";
    if(numCheck === 0){
        stringNumOne += ".";
    }
    else{
        stringNumTwo += ".";
    }

    decimalCheck = 1;
})
// When the positiveNegative button is pressed, update the screen, make the number negative/positive and update the true or false statements
positiveNegativeButton.addEventListener("click", () => {
    if(numCheck === 0){ // When on the first number before any operators use the following code
        if(stringNumOne.startsWith("-")){ // Checks if the number is negative
            stringNumOne = stringNumOne.slice(1); // Removes "-" making the number now positive
        }
        else{ 
            if(stringNumOne === 0){ // If no numbers have been added, Run this code
                stringNumOne = "-0" + stringNumOne; // Adds "-" to the front of "0"
            }
            else{
                stringNumOne = "-" + stringNumOne; // Removes "-" to the front of "0"
            }
        }
    }
    else{ // When in the second number, This is true
        if(stringNumTwo.startsWith("-")){ // Checks if the second number starts with "-"
            stringNumTwo = stringNumTwo.slice(1); // If so then remove it
        }
        else{
            stringNumTwo = "-" + stringNumTwo; // If false then add it
        }
    }
    const lastOperator = visual.innerText.match(/[÷x\-+]/); // If there is an operator then run the code below
        if (lastOperator) { // Run if above is true
            const operatorIndex = visual.innerText.lastIndexOf(lastOperator[0]); // Finds the last occurance of an operator sign, lastIndexOf works when there are multiple operators, Then places that date inside of operatorIndex
            visual.innerText = visual.innerText.slice(0, operatorIndex + 1) + stringNumTwo; // Slices up to the position right after the operator after knowing where the operator is (operatorIndex), Then adding that to stringNumTwo completes it
        }
    updateVisual(); // Calls updateVisual
})





// When the one button is pressed, update the screen, The current precalculation, And the true or false statements
oneButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll();
    }
    if(stringNumOne === "-0"){
        clearFieldAll();
        stringNumOne = "-"; // Accounts for if negative button was pressed before a number
    }
    if(numCheck === 0){
        stringNumOne += 1;
    }
    else{
        stringNumTwo += 1;
    }
    updateVisual(); // Make sure the screen is up to date
})
// When the two button is pressed, update the screen, The current precalculation, And the true or false statements
twoButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll();
    }
    if(stringNumOne === "-0"){
        clearFieldAll()
        stringNumOne = "-"; // Accounts for if negative button was pressed before a number
    }
    if(numCheck === 0){
        stringNumOne += 2;
    }
    else{
        stringNumTwo += 2;
    }
    updateVisual(); // Make sure the screen is up to date
})
// When the three button is pressed, update the screen, The current precalculation, And the true or false statements
threeButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll();
    }
    if(stringNumOne === "-0"){
        clearFieldAll();
        stringNumOne = "-"; // Accounts for if negative button was pressed before a number
    }
    if(numCheck === 0){
        stringNumOne += 3;
    }
    else{
        stringNumTwo += 3;
    }
    updateVisual(); // Make sure the screen is up to date
})
// When the four button is pressed, update the screen, The current precalculation, And the true or false statements
fourButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll();
    }
    if(stringNumOne === "-0"){
        clearFieldAll();
        stringNumOne = "-"; // Accounts for if negative button was pressed before a number
    }
    if(numCheck === 0){
        stringNumOne += 4;
    }
    else{
        stringNumTwo += 4;
    }
    updateVisual(); // Make sure the screen is up to date
})
// When the five button is pressed, update the screen, The current precalculation, And the true or false statements
fiveButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll();
    }
    if(stringNumOne === "-0"){
        clearFieldAll()
        stringNumOne = "-"; // Accounts for if negative button was pressed before a number
    }
    if(numCheck === 0){
        stringNumOne += 5;
    }
    else{
        stringNumTwo += 5;
    }
    updateVisual() // Make sure the screen is up to date
})
// When the six button is pressed, update the screen, The current precalculation, And the true or false statements
sixButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll();
    }
    if(stringNumOne === "-0"){
        clearFieldAll();
        stringNumOne = "-"; // Accounts for if negative button was pressed before a number
    }
    if(numCheck === 0){
        stringNumOne += 6;
    }
    else{
        stringNumTwo += 6;
    }
    updateVisual(); // Make sure the screen is up to date
})
// When the seven button is pressed, update the screen, The current precalculation, And the true or false statements
sevenButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll();
    }
    if(stringNumOne === "-0"){
        clearFieldAll()
        stringNumOne = "-"; // Accounts for if negative button was pressed before a number
    }
    if(numCheck === 0){
        stringNumOne += 7;
    }
    else{
        stringNumTwo += 7;
    }
    updateVisual(); // Make sure the screen is up to date
})
// When the eight button is pressed, update the screen, The current precalculation, And the true or false statements
eightButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll();
    }
    if(stringNumOne === "-0"){
        clearFieldAll();
        stringNumOne = "-"; // Accounts for if negative button was pressed before a number
    }
    visual.innerText += "8";
    if(numCheck === 0){
        stringNumOne += 8;
    }
    else{
        stringNumTwo += 8;
    }
    updateVisual() // Make sure the screen is up to date
})
// When the nine button is pressed, update the screen, The current precalculation, And the true or false statements
nineButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        clearFieldAll();
    }
    if(stringNumOne === "-0"){
        clearFieldAll();
        stringNumOne = "-"; // Accounts for if negative button was pressed before a number
    }
    if(numCheck === 0){
        stringNumOne += 9;
    }
    else{
        stringNumTwo += 9;
    }
    updateVisual(); // Make sure the screen is up to date
})
// When the zero button is pressed, update the screen, The current precalculation, And the true or false statements
zeroButton.addEventListener("click", () => {
    if(visual.innerText === "0"){
        return;
    }
    if(numCheck === 0){
        stringNumOne += 0;
    }
    else{
        stringNumTwo += 0;
    }
    updateVisual(); // Make sure the screen is up to date
})