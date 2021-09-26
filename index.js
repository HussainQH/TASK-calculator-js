let operations = ['+', '-', 'x', '÷'];
let operationIndex = null;
let numberOne = null;
let numberTwo = null;
let history = [];

const resetCalculator = () =>{
  // calculate = [];
  operationIndex = null;
  numberOne = null;
  numberTwo = null;
  printOnConsole(0)
}

let calculations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  'x': (num1, num2) => num1 * num2,
  '÷': (num1, num2) => num1 / num2,
}

const calculateTotal = (num1, num2, index) => {
  let operation = operations[index]
  let calc = `${num1} ${operation} ${num2} = ${calculations[operation](parseInt(num1), parseInt(num2))}`
  history.unshift(calc)
  updateHistory(history)
  printOnConsole(calculations[operation](parseInt(num1), parseInt(num2)))
  operationIndex = null;
  numberOne = null;
  numberTwo = null;
}

function buttonClick(text) {
  if (parseInt(text) >= 0 && text < 10 && numberOne === null && text !== '=' && text !== 'AC' && operationIndex === null ){
    numberOne = `${text}`
    printOnConsole(numberOne)
  } else if (parseInt(text) >= 0 && text < 10 && text !== '=' && text !== 'AC' && numberTwo === null && operationIndex == null){
    numberOne = numberOne+`${text}`
    printOnConsole(numberOne)

  } else if (numberOne !== null && numberTwo === null && text !== '=' && text !== 'AC' && operations.includes(text)){
    operationIndex = operations.indexOf(text)

  } else if (parseInt(text) >= 0 && text < 10 && numberTwo === null && text !== '=' && text !== 'AC'){
    numberTwo = `${text}`
    printOnConsole(numberTwo)
  } else if (parseInt(text) >= 0 && text < 10 && text !== '=' && text !== 'AC'){
    numberTwo = numberTwo+`${text}`
    printOnConsole(numberTwo)

  } else if (text.includes('AC')) {
    resetCalculator();

  } else if(text === '='){
    calculateTotal(numberOne, numberTwo, operationIndex)
  }
}