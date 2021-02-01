/*
Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
C = (F - 32) * 5/9
F = C * 9/5 + 32
*/

//1-Have a function: transformDegree('00F') or transformDegree('00C')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

//Error catch: ('00d') for the letter
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

//O momento do cálculo. 
//Foi escolhido fluxo ideal F -> C
        let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
        let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
        let degreeSign = 'Cº'  //É a alteração de final que vai imprimir depois do cálculo

//Ele já assume que será F, porém se for C:
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'Fº'  //É a alteração de final que vai imprimir depois do cálculo
    }
    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
//Caminho do erro:
    transformDegree('50z')
} catch (error) {
    console.log(error.message) //Rastreamentp de errp; Ele pega o objeto de erro criado pelo throw new error e imprime
    //console.log(error) //Aqui é uma opção para mostrar o erro com todos os detalhes
}
