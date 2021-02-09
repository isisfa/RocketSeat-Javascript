//Funções anônimas: Quando as funções nomeadas ficarem grandes e sobrecarregarem o fluxo geral do script, devem ser colocadas acima do script principal para que a chamada ocorra somente quando for necessário.
//Funcionam da mesma maneira que o exercício anterior, porém menores e só rodam quando solicitadas.

//não há necessidade de informar valores às variáveis antes.
var theBiggest = function (a, b) {
    var result 
    a > b ? result = ["a", a] : result = ["b", b];
    return result
}

console.log(">>" + theBiggest(7/9, 13/25))
console.log(">>" + theBiggest) //É importante retornar a função, e não o resultado dela em alguns casos (eventos)





//Expressões de funções invocadas imediatamente
// Toda a função em parênteses e declarar os valores ()
// Preiro declarar as variáveis, senão quebra

var firstFraction = 7/9
var secondFraction = 13/25

var theBiggest = (function (a, b) {
    var result 
    a > b ? result = ["a", a] : result = ["b", b];
    return result
}) (firstFraction, secondFraction)

console.log(theBiggest)