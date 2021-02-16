//Estrutura de repetição, enquanto a validação for verdade
//break - para a execução do loop (nem mostra a partir do valor selecionado)
//continue - pula a execução do momento (pula o valor selecionado)

for (let i = 10; i > 0; i--) {
    if (i === 5) {
        continue;           //pulará o 5, depois continua o loop até o final do for!
    }
console.log(i)
}


//Utilizando o for para percorrer o html buscando lnks que nao possuam determinado atributo e inclui-lo

var lookForLinks = document.querySelectorAll("a[href^=http")
console.log (lookForLinks)

for (var i = 0 ; i < lookForLinks.length; i++) { 
    if (!lookForLinks[i].hasAttribute("target")) {
        lookForLinks[i].setAttribute("target", "_blank")
    }
}