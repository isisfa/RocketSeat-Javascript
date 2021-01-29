//throw  (Lançar) 

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório!'  //padrão é criação de erro: throw new Error ("Nome é obrigatório!") 
    }
    console.log('depois do erro')
}



//try... catch
/*try são as tentativas, se algo por acaso der errado (erro inesperado), o catch vai segurar e garantir que a aplicação não quebre
tratamento de erros, para a aplicação não parar por causa de algum possível erro; falha*/

try {
    sayMyName()

} catch(e) {            //contrário da mensagem: uncaught
    console.log(e)
}
console.log('Após o try/catch')
