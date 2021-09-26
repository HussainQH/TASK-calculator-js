/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */
let calculate = []; //add all numbers, operators and answer to send to update history
let currentNumber = '0'; //Printed to calculator console
let operations = ['+', '-', 'x', '÷'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// let operationStatus = true; might need to be removed
let result = null;

function buttonClick(text) {
  if (text >= 0 && text < 10){
    // if (operationStatus === true)
    currentNumber = currentNumber+`${text}`
    console.log(currentNumber)
    console.log(text)
    printOnConsole(text)  //Might need to remove this function call, might be redundant
  } else if (text === '+' || text === '-' || text === 'x' || text === '÷'){
    updateCalc(currentNumber, text);
  } else if (text === 'AC'){
    clearCal()
  } else if (text === '=') {
    calculateResult()
    
  }
  printOnConsole(currentNumber) //Needs to remain within the function
}

const calculateResult = () => {
  calculate.push(currentNumber)
  //Add a way to calculate
  //Add a way to print to history

  calculate = [];
  currentNumber = '0';
  printOnConsole()
  updateHistory()
  result = null;
}

const clearCal = () => {
  console.log('cleared')
  calculate = [];
  currentNumber = '0';
  printOnConsole(0);
}

const updateCalc = (number, opeation) => {
  calculate.push(number);
  calculate.push(opeation)
  currentNumber = '0';
}
/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */


// string to number
// get answer
// turn back to number to updateHistory
// Remove Me after testing
// printOnConsole("1");
// updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
