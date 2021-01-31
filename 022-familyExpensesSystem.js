//Sistema de gastos familiar

/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
* receitas: []
* despesas: []

Agora crie uma função que irá calcular o total das despesas e receitas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo.
*/

let family = {
    incomes: [1500, 1000],
    expenses: [550, 300, 120, 30, 30, 290]
}

function sum (array) {
    total = 0;
    for (let value of array) {
         total += value
    }
   
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    const positive = total >= 0

    let balanceText = "Negativo"

    if (positive) {
        balanceText = "Positivo"
    }

    console.log(`O seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()