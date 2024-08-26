//const book = {
    //title: 'Eragon',
   // pages: 465,
    //published: true,
    //inStock: 20,
    //tags: ['fantasy', 'adventury', 'medieval'],
    //autor: {
      //  name: 'Chris'
  //  },
    //addOnStock(quantity){
        //this.inStock += quantity
    //}
//}

function book(title, pages, tags,author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
}

const tags = ['fantasy', 'adventury', 'medieval']
const author = {nome:'cristopher paulino'}

const Eragon = new book('Eragon', 468, tags, author)

console.log(Eragon)

/*console.log(book.title)

book.addOnStock(50)

console.log(book.inStock)*/