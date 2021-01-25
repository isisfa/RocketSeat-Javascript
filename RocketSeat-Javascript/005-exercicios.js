//1- Declare uma variável de nome weight
let weight


//2- Que tipo de dado é a variável acima?
console.log (typeof weight)


//3- Declare as variáveis e atribua os seus valores
let student= {
 name: 'Isis',
 age: 30,
 weight: 72.5,
 isSubscribed: true
}
console.log(`${student.name}, de idade ${student.age} anos, pesa ${student.weight}Kg.`)


//4- Declare uuma variavel de tipo array de nome studentes, porém vazio.
let students= []


//5- Reatribua ao array acima a variável student
students = [
    student
]
console.log(students)


//Mostre o valor 0 do array acima
console.log(students[0])

//Crie um novo student e coloque na posição 1 de students
student[1]= {
name: 'Fernando',
age: 31,
weight: 78.5,
isSubscribed: true
}
console.log(student[1])

//Hoisting = Por ser VAR não dá erro de referência! Reconhece o a porém não reconhece o seu valor. 
console.log(a)
var a= 1
