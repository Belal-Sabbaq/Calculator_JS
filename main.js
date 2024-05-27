const OperationsDisplaying = document.querySelector('.operations');
const answerDisplaying = document.querySelector('.ans');
const buttons = document.querySelectorAll('.btn');
firstOperand = null;
currentOperation = null;
secondOperand = null;
DecimalPoint = false;

answerDisplaying.textContent = 'Magno is always the Answer';
OperationsDisplaying.textContent = 'Waiting For You Buddy!';

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    if (!isNaN(buttons[i].id)) {
      if (currentOperation === null) {
        if (firstOperand === null) {
          if (DecimalPoint) {
            firstOperand = parseInt(buttons[i].id) / 10;
            OperationsDisplaying.textContent = firstOperand;
          }
          else {
            firstOperand = parseInt(buttons[i].id);
            OperationsDisplaying.textContent = firstOperand;
          }
        }
        else {
          if (DecimalPoint) { 
            if (firstOperand % 1 ==0) { 
              firstOperand += parseInt(buttons[i].id) / 10;
              OperationsDisplaying.textContent = firstOperand;
            }
            else {
              let numOfDecimals = firstOperand.toString().split('.')[1].length;
              firstOperand = firstOperand + (parseInt(buttons[i].id) /( Math.pow(10,numOfDecimals)));
              OperationsDisplaying.textContent = firstOperand;
            }
          }
          firstOperand = firstOperand * 10 + parseInt(buttons[i].id);
          OperationsDisplaying.textContent = firstOperand;
        }
      }
      else {
        if (secondOperand === null) {
          secondOperand = parseInt(buttons[i].id);
          OperationsDisplaying.textContent = firstOperand+ currentOperation+ secondOperand;
        }
        else {
          secondOperand = secondOperand * 10 + parseInt(buttons[i].id);
          OperationsDisplaying.textContent = firstOperand+ currentOperation+ secondOperand;
        }
      }
    } else {
      switch (buttons[i].id) {
        case ('Division'):
          if (secondOperand !== null) { 
            firstOperand = multipleOperations(currentOperation);
            answerDisplaying.textContent = firstOperand;
            secondOperand = null;
          }
          if (firstOperand === null) {
            firstOperand = 0;
            answerDisplaying.textContent = firstOperand;
          }
          currentOperation = '/';
          OperationsDisplaying.textContent = firstOperand + currentOperation;
          break;
        case ('Multiplication'):
          if (secondOperand !== null) { 
            firstOperand = multipleOperations(currentOperation);
            answerDisplaying.textContent = firstOperand;
            secondOperand = null;
          }
          if (firstOperand === null) {
            firstOperand = 0;
            answerDisplaying.textContent = firstOperand;
          }
          currentOperation = '*';
          OperationsDisplaying.textContent = firstOperand + currentOperation;
          break;
        case ('Subtraction'):
          if (secondOperand !== null) { 
            firstOperand = multipleOperations(currentOperation);
            answerDisplaying.textContent = firstOperand;
            secondOperand = null;
          }
          if (firstOperand === null) {
            firstOperand = 0;
            answerDisplaying.textContent = firstOperand;
          }
          currentOperation = '-';
          OperationsDisplaying.textContent = firstOperand + currentOperation;
          break;
        case ('Addition'):
          if (secondOperand !== null) { 
            firstOperand = multipleOperations(currentOperation);
            answerDisplaying.textContent = firstOperand;
            secondOperand = null;
          }
          if (firstOperand === null) {
            firstOperand = 0;
            answerDisplaying.textContent = firstOperand;
          }
          currentOperation = '+';
          OperationsDisplaying.textContent = firstOperand + currentOperation;
          break;
        case ('clear'):
          firstOperand = null;
          currentOperation = null;
          secondOperand = null;
          answerDisplaying.textContent = 'Magno is always the Answer';
          OperationsDisplaying.textContent = 'Waiting For You Buddy!';
          break;
        case ('Equal'):
          if (firstOperand!== null && secondOperand!== null) {
            switch (currentOperation) {
              case ('+'):
                answerDisplaying.textContent = firstOperand + secondOperand;
                break;
              case ('-'):
                answerDisplaying.textContent = firstOperand - secondOperand;
                break;
              case ('*'):
                answerDisplaying.textContent = firstOperand * secondOperand;
                break;
              case ('/'):
                answerDisplaying.textContent = firstOperand / secondOperand;
                break;
            }
            firstOperand = null;
            currentOperation = null;
            secondOperand = null;
          }
          else {
            answerDisplaying.textContent = 'Error';
            firstOperand = null;
            currentOperation = null;
            secondOperand = null;
          }
        case ('Dot'):
          DecimalPoint = true;
          break;
        case ("del"):
          break;
          break;
        default:
      }
    }
  });
}


// for multiple Operation 
function multipleOperations(currentOperation){ 
switch (currentOperation) {
              case ('+'):
              return firstOperand + secondOperand;
                break;
              case ('-'):
                return firstOperand - secondOperand;
                break;
              case ('*'):
                return firstOperand * secondOperand;
                break;
              case ('/'):
                return firstOperand / secondOperand;
                break;
  default:
  break;
}
}
