//Estrutura de repetição, enquanto a validação for verdade
//break - para a execução do loop (nem mostra a partir do valor selecionado)
//continue - pula a execução do momento (pula o valor selecionado)

for (let i = 10; i > 0; i--) {
    if (i === 5) {
        continue;           //pulará o 5, depois continua o loop até o final do for!
    }
console.log(i)
}