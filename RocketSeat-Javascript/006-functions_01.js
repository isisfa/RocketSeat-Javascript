// function expression; anonymous        (function sem nome específico)

function createPhrases() {                      // {}  scope
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}
createPhrases()                                 //Chamada para função. Entre () são os argumentos
console.log('Fim')




// functions in variables               (funções em variáveis)


const sum = function (number1, number2) {      //estas () são os parâmetros
    var total = number1 + number2              //Percebeu que não declarou o total com let? SEMPRE DECLARAR, pois assim ficará isolado no escopo
    console.log(total)                         //Total funciona pois está dentro do bloco
    return total  
}
//console.log(sum(5, 10))
sum(5,15)


                                              //console.log(total)     não funciona fora do escopo onde foi declarado

let number1 = 34
let number2 = 25
console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)

// -------------------------------------------------------------------------

/*
let subject
function createThink() {                     // () não passou parâmetro, então ele aceita sobrescrever na variavel let anterior
    subject = 'study'
    return subject                           
}

console.log(subject)                       // não atribuiu nada=undefined
console.log(createThink())                 // study
console.log(subject)                       // study
*/
let subject = 'Create Video'
function createThink(subject) {            // (subject) é criado outro subject       
    subject = 'study'
    return subject                           
}

console.log(subject)                        //create video
console.log(createThink(subject))           //study =  Passam a ser coisas diferentes




// hoisting function 

sayMyName()

function sayMyName() {
    console.log('Isis')
}

/*
O mesmo não funciona para variáveis com funções:
var sayMyName = function sayMyName() {
    console.log('Isis')
}

const sayMyName = function sayMyName() {
    console.log('Isis')
}
*/




// arrow function
                                        //ATENÇÃO! Ela não sofre HOISTING
                                        //Normalmente atribui a uma const

const ssayMyName = () => {
    console.log('Isis')
}
ssayMyName()




// callback function
                                        //É uma função que chama ela em algum momento dentro da função (Pois função também pode ser o atributo de uma função)
function callback(name) {
    console.log('Antes de executar a função callback')

    name()

    console.log('Depois de executar a callback')
}

callback(
    () => {
        console.log('ESTOU EM UMA CALLBACK!')
    }
)



//  function constructor (funções construtoras)
                                    //Objetivo: Criar um novo objeto
                                    //Primeira letra maiúscula (desejável)
                                    //Expressão: new
                                    //Keyworc: this

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person ("Mayk")    //Instanciar um novo objeto
const peter = new Person ("Peter")
console.log(mayk.walk())
console.log(peter.walk())




                                    //Já existem diversas funções construtoras que já tem no Javascript(e possuem padrao da primeira letra maiúscula): String, Date, ...

let name = new String("Isis")
console.log(name)




let date = new Date("2021-01-27")
console.log(date)
                                    