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