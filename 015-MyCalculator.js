
function calculator(number1, operator, number2) {
    let total = 0                        //caso não definido será 0, começa com 0

    switch (operator) {
        case '+':
            total = number1 + number2
            break
        case '-':
            total = number1 - number2
            break
        case '*':
            total = number1 * number2
            break
        case '/':
            total = number1 / number2
            break
        default:
            console.log('Erro')
            break
    }
    return total
    
}
console.log(calculator(10, '+', 100))

