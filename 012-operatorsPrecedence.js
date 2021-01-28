//Operator Precedence:

/*               MUITO IMPORTANTE !!!!
1 Grouping                          ( )
2 Negação e Incremento              !  ++  --
3 Multiplicação e Divisão           *  /
4 Adição e Subtração                +  -
5 Relacional                        <  <=  >  >=
6 Igualdade                         == != === !==
7 AND                               &&
8 OR                                ||
9 Condicional                       ?:
10 Assignment (Atribuição)          =  +=  -=  *=  /=  %=  **=            
*/

console.log( 3 > 2 > 1)
//             ^ true       (true>1)? false, pois (true==1) Resposta: false
//                                                    ^ TRUTHY

console.log(3 > 2 && 2 > 1)