const Database = require("./Database")
const Author = require("./entities/Author")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")
const User = require("./entities/User")

module.exports = class App{
    static #database = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers(){
        return App.#database.find('users')
    }

    createUser(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthor(){
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genere, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genere, pages, author, description, price, inStock)

        App.#database.saveBook(book)
    }

    addbook(bookName, quantity){
        App.#database.addBooksToStock(bookName, quantity)
    }

    createPoster(name, height, width, description, price, inStock){
        const book = new Poster(name, height, width, description, price, inStock)

        App.#database.savePoster(book)
    }

    getBooks(){
        return App.#database.find('books')
    }

    addPoster(postername, quantity){
        App.#database.addPostersToStock(postername, quantity)
    }

    getposter(){
        return App.#database.find('posters')
    }

    createOrder(items, user){
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({product, quantity})=> {
            if(product instanceof Book){
                App.#database.removeBooksFromStock(product.name, )
            }else if(product instanceof Poster){
                App.#database.removeBooksFromStock(product.name, quantity)
            }
        })
    }

    getOrders(){
        return App.#database.find('Orders')
    }

    showDatabase(){
        App.#database.showStorege()
    }
}