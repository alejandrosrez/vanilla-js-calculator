let result = document.getElementById('result');

let currentResult, currentOperation, isDecimal;

currentOperation = '';

isDecimal = false;

numberClick = (numberId) => {
    let currentNumber = document.getElementById(numberId).innerText;
    
    if (!isDecimal) {
        result.innerText = currentNumber;
    } else {
        result.innerText += currentNumber;
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

    } else {
        currentOperation = operation;
        currentResult = parseFloat(result.innerText);
        isDecimal = false;
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




