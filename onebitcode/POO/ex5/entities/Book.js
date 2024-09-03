const Product = require("./Product");

module.exports = class Book extends Product{
    constructor(title, synopsis, genere, pages, author, description, prince, inStock = 0){
        super(`Livro: ${title}`, description, prince, inStock)
        this.title = title
        this.synopsis = synopsis
        this.genere = genere
        this.pages = pages
        this.author = author
    }
}