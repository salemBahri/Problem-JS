// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7



function basicOp(operation, value1, value2){
    switch (operation) {
        case '+':
            return value1+value2
            break;
    
        case '-':
            return value1-value2
            break;
        case '*':
            return value1*value2
            break;
        case '/':
            return value2==0?'impossible to divide with zero':value1/value2
            break;
        default:
            break;
    }
    return 0;
  }
  console.log(basicOp('/', 49, 7));
  


//OR

function basicOp(operation, value1, value2){
    return eval(value1+operation+value2)
    return 0;
  }
  console.log(basicOp('/', 49, 7));
  
