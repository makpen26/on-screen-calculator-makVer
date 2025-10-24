let numberToLeftOfOperand = '';
let operatorBetweenLeftAndRight = '';
let numberToRightOfOperand = '';

const stringWithDigitsInside = '0123456789';
const stringWithBasicOperatorsInside = '+-x/';



const size = 4;
const dimension = "80px";

function toAddTwoNumbers(firstNumber, secondNumber) {
    return parseInt(firstNumber) + parseInt(secondNumber);
}

function toSubtractTwoNumbers(firstNumber, secondNumber) {
    return parseInt(firstNumber) - parseInt(secondNumber);
}

function toMultiplyTwoNumbers(firstNumber, secondNumber) {
    return parseInt(firstNumber) * parseInt(secondNumber);
}

function toDivideTwoNumbers(firstNumber, secondNumber) {
    return (secondNumber === 0) ? "Exception: dividing by zero" : Math.ceil(parseInt(firstNumber) / parseInt(secondNumber));
}

function operate(operatorBetweenLeftAndRight, numberToLeftOfOperand, numberToRightOfOperand) {
    switch (operatorBetweenLeftAndRight) {
        case '+': 
            return toAddTwoNumbers(numberToLeftOfOperand, numberToRightOfOperand);
            break;
        case '-':
            return toSubtractTwoNumbers(numberToLeftOfOperand, numberToRightOfOperand);
            break;
        case 'x':
            return toMultiplyTwoNumbers(numberToLeftOfOperand, numberToRightOfOperand);
            break;
        case '/':
            return toDivideTwoNumbers(numberToLeftOfOperand, numberToRightOfOperand);
            break;
        default:
            return "Unsupported operators as of now. Working on it...";
            break;
    }
}   


const digitsButtons = document.querySelector(".digitButton");

for (let i = 0; i < size; i++) {
    const divForCalButtons = document.createElement("div");
    const selectorStringId = `rowForDigit${i}`;
    divForCalButtons.setAttribute(`id`, selectorStringId);

    digitsButtons.appendChild(divForCalButtons);
    divForCalButtons.style.gap = "8px";
    divForCalButtons.style.paddingBottom = "10px";

    for (let j = 0; j < size; j++) {
        const createIndividualButton = document.createElement("button");
        const selectorStringClass = `eachDigitButtons${j}`;
        createIndividualButton.classList.add(selectorStringClass);
        createIndividualButton.classList.add(`button`);

        
        createIndividualButton.style.border = "1px solid black";
        createIndividualButton.style.height = dimension;
        createIndividualButton.style.width = dimension;
        

        divForCalButtons.appendChild(createIndividualButton);
    }
    
    divForCalButtons.style.display = "flex";
}


const digitButtonsRow1 = document.querySelectorAll('#rowForDigit0 button');
//digitButtons.forEach((button, index) => button[1].textContent = "hello"); 
digitButtonsRow1[0].textContent = "1";
digitButtonsRow1[1].textContent = "2";
digitButtonsRow1[2].textContent = "3";
digitButtonsRow1[3].textContent = "/";

const digitButtonsRow2 = document.querySelectorAll('#rowForDigit1 button');
digitButtonsRow2[0].textContent = "4";
digitButtonsRow2[1].textContent = "5";
digitButtonsRow2[2].textContent = "6";
digitButtonsRow2[3].textContent = "x";


const digitButtonsRow3 = document.querySelectorAll('#rowForDigit2 button');
digitButtonsRow3[0].textContent = "7";
digitButtonsRow3[1].textContent = "8";
digitButtonsRow3[2].textContent = "9";
digitButtonsRow3[3].textContent = "+";

const digitButtonsRow4 = document.querySelectorAll('#rowForDigit3 button');
digitButtonsRow4[0].textContent = ".";
digitButtonsRow4[1].textContent = "0";
digitButtonsRow4[2].textContent = "=";
digitButtonsRow4[3].textContent = "-";


const referDisplay = document.querySelector('.inner-div-display');
let disResult = " ";

const detectButtonClicked = document.querySelectorAll('.button');
detectButtonClicked.forEach((buttonClicked) => {
      buttonClicked.addEventListener('click', (event) => {
        disResult += (event.target.textContent);
        referDisplay.textContent = disResult;

         if (stringWithDigitsInside.includes(event.target.textContent)) {
                if(operatorBetweenLeftAndRight) {
                    numberToRightOfOperand += event.target.textContent;
                } else { 
                    numberToLeftOfOperand += event.target.textContent;
                }
             
         } else if (stringWithBasicOperatorsInside.includes(event.target.textContent)) {
             operatorBetweenLeftAndRight = event.target.textContent;
          } //else if (operatorBetweenLeftAndRight) {
        //      numberToRightOfOperand += event.target.textContent;
        //  }

        if(event.target.textContent === '=') {
               referDisplay.textContent = operate(operatorBetweenLeftAndRight, numberToLeftOfOperand, numberToRightOfOperand);
           }
      });
});


// const referClearAndDelete = document.querySelector('.clearAndDelete .clearBut');
// referClearAndDelete.addEventListener('click', () => {
//     arrayB.length = 0;
//     referDisplay.textContent = arrayB.join("");
// });



