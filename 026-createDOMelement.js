/* Ao invés de usar .innerHTML ou outHTML, temos a alternativa mais segura, limpa e versátil

1- Crie o elemento  .createElement()
2- Crie o nó de texto que vai dentro dele   .createTextNode()
3- Adicione o nó que vai dentro dele        .appendChild()
4- Adicione o elemento à árvore DOM
*/

//declaramos as constantes
const featured = document.querySelector(".featured-image")
const theImage = featured.querySelector("img")

//Acha o atributo alt e "pega"
var altText = Theimage.getAttribute("alt")

//Cria o elemento de legenda de figuras
var captionElement = document.createElement("figcaption")

//Cria um nó de texto para alt
var captionText = document.createTextNode(altText)

//Adiciona o texto ao final do elemento de legenda de figuras. Vincula texto ao elemento
captionElement.appendChild(captionText)

//A imagem em destaqie recebe e legenda no final dela
featured.appendChild(captionElement)

//Atualiza o valor de alt da imagem THEIMAGE para vazio (senão ficaria duplicada
theImage.setAttribute("alt", "")

console.log(captionElement)


//Outra forma de fazer somente com APPEND (inda não +e suportado em tudos os navegadores)
//declaramos as constantes
const featured = document.querySelector(".featured-image")
const theImage = featured.querySelector("img")

//Acha o atributo alt e "pega"
var altText = Theimage.getAttribute("alt")

//Cria o elemento de legenda de figuras
var captionElement = document.createElement("figcaption")

//Adiciona o valor de alt a legenda
captionElement.append(altText)

//Adiciona a legenda a imagem
featured.append(captionElement)

//Atualiza o valor de alt da imagem THEIMAGE para vazio
theImage.setAttribute("alt", "")

console.log(captionElement)