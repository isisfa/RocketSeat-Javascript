let temperatura = 40

//  SÓ MOSTRA SE A CONDIÇÃO FOR VERDADEIRA:
/*  
    if (temperatura >= 37) {
        console.log('Está com Febre!')
    }   */
    

//  MOSTRA CASO A CONDIÇÃO FOR VERDADEIRA OU NÃO
/*  
    if (temperatura > 37) {
        console.log('Está com Febre!')
    } else {
        console.log('Está saudável!')
    }   */

//  MOSTRA MAIS OPÇÕES DE CONDIÇÕES
/*
    if (temperatura >= 37.5) {
        console.log('Está com Febre alta!')
    } else if (temperatura >= 37 && temperatura < 37.5) {
        console.log('Está com febre moderada!')
    } else {
        console.log('Está saudável')
    }   */


//USANDO IF E ELSE DE MANEIRA OTIMIZADA

let highTemprerature = temperatura >= 37.5
let mediumTemperature = temperatura < 37.5 && temperatura >= 37

if (highTemprerature) {
    console.log('Está com Febre alta!')
} else if (mediumTemperature) {
    console.log('Está com febre moderada!')
} else {
    console.log('Está saudável')
} 