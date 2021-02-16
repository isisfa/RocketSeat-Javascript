//Estrutura de repetição


let i = 0 
while (i < 10) {
    //console.log(i)

    i++                 //Tem que ir alterando o valor do i, senão a aplicação não terá fim, loop infinito.
}


//MAS QUANDO UTILIZAR? Quando não sabemos quando a aplicação irá parar. Exemplo: divisões

let d = 55845
while (d >= 1) {
    console.log(d)

    d /= 3       //Divisões por 51 até ser menor que 1
}

//Para que rode ao menos uma vez mesmo que a condição while nao seja atendida utilizamos o do...while

var r = 567 
var reps = 0 

do {
    ++ reps
    console.log(reps + "repetições")
    r *= 2.1
} while (r < 567);