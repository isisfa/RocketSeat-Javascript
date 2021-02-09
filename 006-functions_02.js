//Declaração de variáveis em funções

//Maneira simpes
/*
function findBiggestFraction (a, b) {
    a > b ? console.log("a: ", a) : console.log("b: ", b)
}

var firstFraction = 3/4
var secondFraction = 5/7

findBiggestFraction(firstFraction, secondFraction)
*/


 //Maneira mais complexa, porém de maior endentimento e possibilidades

 function findBiggestFraction (a, b) {
     var result
    a > b ? result = ["firstFraction", a] : result = ["secondFraction", b]
    return result  //precisa guardar o valor para utilizar depois, sem mostrar em console.log
}

var firstFraction = 3/4
var secondFraction = 5/7

var fractionResult = findBiggestFraction (firstFraction, secondFraction)

console.log(`O resultado da primeira fração é: ${firstFraction}`)
console.log(`O resultado da segunda fração é ${secondFraction}`)
console.log(`A maior fração é: ${fractionResult[0]}, com o valor: ${fractionResult[1]}`)

//funcões anônimas no próximo arquivo