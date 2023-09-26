var rs = require('readline-sync');


// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result 

function getOperator() {
  let operator = rs.question("What operation would you like to perform? :  ");

  if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
    console.log("That is not a valid operation");
    getOperator();
  } else return operator;
}
let operatorSign = getOperator();
let getFirstInt = rs.questionInt('Please enter the first number : ')
let getSecondInt = rs.questionInt('Please enter the second number : ')

function performOperation(firstNum, secondNum) {
  if (operatorSign === '+') {return firstNum + secondNum};
  if (operatorSign === '-') {return firstNum - secondNum};
  if (operatorSign === '*') {return firstNum * secondNum};
  if (operatorSign === '/') {return firstNum / secondNum};
}
console.log("The result is: " + performOperation(getFirstInt, getSecondInt));


