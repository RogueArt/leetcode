/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
    const operatorStack = []
    const operandStack = []
    
    // Go through the entire string once
    for (let x = 0; x < s.length; x += 1) {
        const ch = s[x]
        
        // Do nothing on empty string
        if (ch === ' ') continue
        
        // Capture current integer (operand)
        let curNum = 0
        if (isDigit(ch)) {
            // Read through the entire integer
            while (x < s.length && isDigit(s[x])) {
                curNum = curNum * 10 + parseInt(s[x])
                x += 1
            }
            operandStack.push(curNum)
            
            // Revert the extra increment
            x -= 1
        }
        // Otherwise it's an operator
        else {
          // Check there is an operator in the stack
          // Check priority of current is lower than top            
          while (operatorStack.length > 0 && priority(ch) <= priority(operatorStack[operatorStack.length - 1])) {
              const num2 = operandStack.pop()
              const num1 = operandStack.pop()
              const operator = operatorStack.pop()
              
              operandStack.push(evaluate(num1, num2, operator))
          }
            
          operatorStack.push(ch)
        }
    }
    
    // Evaluate all remaining values in stack 
      while (operatorStack.length > 0) {
          const num2 = operandStack.pop()
          const num1 = operandStack.pop()
          const operator = operatorStack.pop()

          operandStack.push(evaluate(num1, num2, operator))
    }
    
    // Return whatever is at the top of the operand stack
    return operandStack.pop()
};

// 3 * 2 + 2

function isDigit(ch) {
    return '0' <= ch && ch <= '9'
}

function evaluate(num1, num2, op) {
    switch (op) {
        case '+': return num1 + num2
        case '-': return num1 - num2
        case '*': return num1 * num2
        case '/': return Math.trunc(num1 / num2)
    }
}

function priority(op) {
    switch (op) {
        case '+':
        case '-':
            return 1
        case '*':
        case '/':
            return 2
    }
    
    throw Error('Should never reach this')
}

function isOperator(ch) {
    switch (ch) {
        case '+': return true
        case '-': return true
        case '/': return true
        case '*': return true
        default: return false
    }
}