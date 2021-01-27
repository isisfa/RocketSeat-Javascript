//Expressões e operadores


//Binary
let number = 1
console.log(number + 2)               //Soma de dois números
//Unary
console.log(++ number)                //Incremento: Acrescenta mais 1
number = 1
console.log(-- number)                //Decremento: Diminui 1

number = 0
console.log(number ++)                //Perceba que o valor continua 0, pois quando faz incremento ou decremento após o número, ele só soma depois desta linha:
console.log(number)                   //Adicionou o 1 da linha anterior 
//Ternary                  
console.log(true ? 'Olá' : 'Nada')   //Só existe esta possibilidade




//Objects: 


//new: é uma expressão que cria um novo objeto
let name = new String('Isis')
name.surName = "Figueiredo"
let age = new Number(30)
console.log(name, name.surName, age)    

let date = new Date('2021-01-27')
console.log(date)

//typeOf : diz qual tipo de dado é
console.log(`>>>>`, typeof "Isis")

//Delete 
console.log(name)
delete name.surName
console.log(name)

