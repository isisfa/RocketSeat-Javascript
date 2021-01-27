console.log('9' + 5)
console.log(Number('9') + 5)            // Convertendo de string para number.

// string to number
let string = "123"
Number(string)
console.log(Number(string) + 1)

//number to string
let number = 321
String (number)
console.log(String(number) + 1)

//contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = "Paralelepípedo"
console.log(word.length)

let countNumber = 1234
console.log(String(countNumber).length)    //length só funciona em string, por isso +e preciso converter

//transformar um número quebrado com 2 casas decimais (ele vira string) e trocar . por , (só funciona em string)
let fixnumber = 3251125.25221325
console.log(fixnumber.toFixed(2))
console.log(String(fixnumber).replace(".", ","))
console.log(fixnumber.toFixed(2).replace(".", ","))
//                       ^      este já transforma o numero em string, então não precisa converter de novo

//maiúsculas para minúsculas e vice versa
let wword = "Programar é bem bacana!"
console.log(wword.toUpperCase())
console.log(wword.toLocaleLowerCase())

//verificar; pesquisar se o texto contém tal palavra (retorno: true ou false)
let phrase = "Eu quero Programar"
console.log(phrase.includes("Programar"))   //ATENÇÃO! É case sensitive!!!

//Separe um texto que contém espaços em um novo array, onde cada texto é uma posição do array
let text = "Programar é muito BOM!"
let myArray = text.split(" ")
console.log(myArray)

//Agora transforme o array em um texto e onde eram espaços coloque underscore _
let textUnderScore = myArray.join("_")
console.log(textUnderScore)
console.log(textUnderScore.toLocaleLowerCase())

//Criando Array
let array = ['a', 'b', 'c']
console.log(array)

//Criando Array com construtor
                                                        //Utiliza new Array()
let newArray = new Array ('a', 'b', 'c')
console.log(newArray)

//Contar elementos no Array
console.log(["a", "b", "c"].length)
console.log(["a", 
{type: array}, 
function() {return "olá"},
].length)
console.log(["a", 
{type: array}, 
function() {return "olá"},
][2]())

//Transformar uma cadeia de caracteres (string) em elementos de um array
let Word = "ISIS"
console.log(Array.from(Word))

//Manipulando Arrays
let techs = ["html", "css", "js"]

techs.push("nodejs")                                            //Adiciona um item no fim
console.log(techs)                              

techs.unshift("sql")                                           //Adiciona um item ao inicio
console.log(techs)

techs.pop()                                                    //Remove um item no final
console.log(techs)

techs.shift()                                                  //Remove um item do começo
console.log(techs)

//Pegar somente alguns elementos do Array
console.log(techs.slice(1,3))                                  //Ele pede a primeira posicao(index) a cortar(começa no 0) e o ultimo elemento a cortar(começa do 1)
console.log(techs)

//Remover um ou mais itens em qualquer posicao do array
console.log(techs.splice(1,1))                                 //Ele pede a primeira posição(index) a remover(começa no 0) e quantos elementos eu vou remover
console.log(techs)

//Encontrar a posição de um elemento no Array
console.log(techs.indexOf('js'))                               //pesquisando

let index = techs.indexOf('js')                                //pesquisando e excluindo por nome ao invés de posição
techs.splice(index, 1)
console.log(techs)