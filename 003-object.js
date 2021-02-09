const person = {
    name: 'Isis',
    age: 30,
    weight: 72.5,
    isAdmin: true
}
console.log(`${person.name} tem ${person.age} anos.`)
console.log(`${person.name} pesa ${person.weight}Kg.`)

if (person.isAdmin == true) {
    console.log(`${person.name} é Admin.`)
}

//Agregando conhecimento:
/*
var curso = new Object()

var curso = {
    título: "Javascript",
    instrutor: "Isis",
    nível: "1",
    dataDePublicação: false,
    numeroDeVisualizações: 0,
    atualizaNumerodeVisualizações: function () {
        return ++curso.numeroDeVisualizações
    }
}
console.log(curso)
*/


//Quando se cria um objeto, primeira letra é maiúscula! Para ajudar na compreensão e leitura.
//Pode-se criar um objeto de forma que fica mais fácil a criação dos próximos objetos do mesmo tipo

function Curso (título, instrutor, nível, dataDePublicação, numeroDeVisualizações) {
    this.título = título,
    this.instrutor = instrutor,
    this.nível = nível,
    this.dataDePublicação = dataDePublicação,
    this.numeroDeVisualizações = function () {
        return ++curso.numeroDeVisualizações;
    }
}

var cursos = [
    new Curso("Javascript", "Isis", 1, false, 0),
    new Curso("Javascript", "Isis", 1, true, 101202) //Já foi publicado e possui visualizações
]

console.log(cursos[0].nível) //você poderá navegar pelo objeto!! Facilita MUITO manipulá-los