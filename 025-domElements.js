/*Acicionando elementos à árvore DOM
Ver mais em: http://developer.mozila.org/pt-BR/docs/Web/API/Element   */

//São 5 os métodos para .classList
document.querySelector(".nomedaclasse").classList

// add(String [, String]) Adiciona valores de classe especificados.
document.querySelector(".nomedaclasse").classList.add('nomeDaNovaClasse')

// remove( String [, String]) Remove valores de classe específicos
document.querySelector(".nomedaclasse").classList.remove('nomeDoElementoDaClasseARemover')

// item ( Number) Retorna o valor da classe por indice da coleção
document.querySelector(".nomedaclasse").classList[1] //seleciona um item da lista

//toggle ( String [, force]) Quando apenas 1 argumento está presente: Toggle  class value; Ou seja, Se a classe existir, em seguida, remove-a a retorna false. Se não, adiciona-o e retorna true. Quando um segundo argumento está presente: Se o segundo argumento é avaliado como true, adicione o valor especificado da classe e, se ele for avaliado como false, remova-o. Resumo: Seleciona o elemento que deseja ativar e desativar com true e false
document.querySelector(".nomedaclasse").classList.toggle('nomeDoElementoQueDesejaAtivarDesativar')


// contains( String) Verifica se o valor da classe especificado existe no atributo de classe do elemento. virá como true ou false
document.querySelector(".nomedaclasse").classList.contains