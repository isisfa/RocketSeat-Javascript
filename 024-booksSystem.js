/*
Buscando e contando dados em Arrays
Baseeado no Array de livros por categoria abaixo, faça os desafios:

    * Contar o (número de categorias) e o (número de livros em cada categoria)
    * Mostrar o total de autores
    * Mostrar os livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o ()nome do autor e devolver os resultados

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilôlia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    }, 
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey", 
            },
        ],
    },
]

//  Contar a quantidade de categorias
const totalCategories = booksByCategory.length
console.log('Total de categorias: ' + totalCategories)

// Contar o numero de livros em cada categoria
for (let category of booksByCategory) {     
    console.log(`Total de livros na categoria "${category.category}": ${category.books.length}`)                //     ^ Esta é a let category
}

// Contar o número de autores
function countAuthors() {
    let authors = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log(`Total de autores: ${authors.length}`)
}
countAuthors()

/*
//Mostrar os livros do autor Augusto Cury
function booksOfAugustoCury() {
    let titles = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (titles.indexOf(book.title) == -1 && book.author == "Augusto Cury") {
                titles.push(book.title)
            }
        }
    }
    console.log(`Total de livros de Augusto Cury: ${titles.length}. 
    São: ${titles}`)
}
booksOfAugustoCury()
*/

// Alterações para receber o Nome do autor e devolver os resultados
function booksOfAuthor(author) {
    let titles = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                titles.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${titles.join(", ")}`) //.join transforma um array em string, podendo assim escolher a separação entre um e outro. Se deixar original, será vírgula sem espaço.
}
booksOfAuthor('Robert T. Kiyosaki e Sharon L. Lechter')
