const Autor = require("./Author");

const john = new Autor('Jhon Doe')

const post = john.writePost('Título do post', 'Lorem ipsum dolor sic...')

post.addComment('Rafael Fernandes', 'Muito bom!')
post.addComment('Pedro silva', 'Surreal isso!')
console.log(john)
console.log(post)