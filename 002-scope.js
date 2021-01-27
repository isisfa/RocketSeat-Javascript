    //var é global e também local
    //HOISTING: ACEITA QUE EXISTE O X ANTES DE DECLARÁ-LO.
   console.log(`>Existe x antes do bloco? `, x)
{
    var x= 0
}
    console.log(`>Existe x depois do bloco?`, x)
       


    /*VAR EM ARQUIVO .HTML : 
    script>
        //VAR é global e também local
        //HOISTING: ACEITA QUE EXISTE O X ANTES DE DECLARÁ-LO.
        console.log(`>Existe x antes do bloco? `, x)
    {
        var x= 0
    }
        console.log(`Existe x depois do bloco?`, x)
    </script>
    */



    //const e let são locais e só funcionam no escopo onde foi criada PORÉM O VALOR DE CONST NÃO PODE SER ALTERADO!!!
    //No caso de const é preciso criar outra variavel dentro de outro bloco. E mesmo se colocar o mesmo nome serão diferentes.
    let y= 1
 {
     let y= 0
     console.log('> existe y', y) //este y só é reconhecido dentro do bloco
 } 
    console.log('> existe y depois do bloco?', y) //Ignora a existencia de y dentro do bloco acima



    //Fazer referência dentro do bloco é aceito, mesmo que esteja em vários blocos
    let a = 2
    console.log(a)
{
    {
        {
            a = 0
        console.log(a) 
        }
    }   
}
    console.log(a)
