// function expression; anonymous : function sem nome específico


function createPhrases() { 
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}
createPhrases() //Chamada para função. Entre () são os argumentos
console.log('Fim')


// Funções em variáveis


const sum = function (number1, number2) { //estas () são os parâmetros
    var total = number1 + number2 //Percebeu que não declarou o total com let? SEMPRE DECLARAR, pois assim ficará isolado no escopo
    return total 
}
console.log(sum(5, 10))


//console.log(total)     não funciona fora do escopo onde foi declarado

let number1 = 34
let number2 = 25
console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)


// -------------------------------------------------------------------------


let subject
function createThink() {
    subject = 'study'
    return subject       // Toda função que não retorna nada é UNDEFINED
}
console.log(subject)
console.log(createThink())
console.log(subject)