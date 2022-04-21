let result = document.getElementById('result');

let currentResult, currentOperation, isDecimal;

currentOperation = '';

operationCount = 0;

isDecimal = false;

numberClick = (numberId) => {
    let currentNumber = document.getElementById(numberId).innerText;
    
        if (result.innerText == 0) {
            result.innerText = '';
        }

        result.innerText += currentNumber;

        if (operationCount == 1) {
            result.innerText = '';
            result.innerText += currentNumber;
            operationCount = 0;
        }
}

operationClick = (operation) => {

    if (currentOperation != '') {
        if (currentOperation == 'sum') {
            currentResult = currentResult + parseFloat(result.innerText);
       }

       if (currentOperation == 'sub') {
           currentResult = currentResult - parseFloat(result.innerText);
       }

       if (currentOperation == 'mult') {
           currentResult = currentResult * parseFloat(result.innerText);
       }

       if (currentOperation == 'div') {
           currentResult = currentResult / parseFloat(result.innerText);
       }

       currentOperation = operation;
       result.innerText = currentResult;
       isDecimal = false;
       operationCount = 1;

    } else {
        currentOperation = operation;
        currentResult = parseFloat(result.innerText);
        isDecimal = false;
        operationCount = 1;
    }
}

equalClick = () => {
    if (currentOperation == 'sum') {
        currentResult = currentResult + parseFloat(result.innerText);
   }

   if (currentOperation == 'sub') {
       currentResult = currentResult - parseFloat(result.innerText);
   }

   if (currentOperation == 'mult') {
       currentResult = currentResult * parseFloat(result.innerText);
   }

   if (currentOperation == 'div') {
       currentResult = currentResult / parseFloat(result.innerText);
   }

    result.innerText = currentResult;
    currentOperation = '';
}

clearClick = () => {
    result.innerText = 0;
    currentOperation = '';
    currentResult = 0;
    isDecimal = false;
}

decimalClick = () => {
    result.innerText += '.';
    isDecimal = true;
}




