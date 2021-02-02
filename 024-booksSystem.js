/*
Buscando e contando dados em Arrays
Baseeado no Array de livros por categoria abaixo, faça os desafios:

    * Contar o (número de categorias) e o (número de livros em cada categoria)
    * Contar o número de autores
    * Mostrar os livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o ()nome do autor e devolver os 

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
    console.log(`Total de livros na categoria "${category.category}": ${category.books.length}`)
}

// Mostrar o número de autores
