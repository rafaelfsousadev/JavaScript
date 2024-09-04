const App = require('./App')

App.createUser('Rafael@gmail.com', 'Rafael Fernandes')
App.createUser('pedro@gmail.com', 'Pedro Silva')
App.createUser('Erick@gmail.com', 'Erick Bernado')

App.deposit('Rafael@gmail.com', 100)

App.transfer('Rafael@gmail.com','pedro@gmail.com', 20)

App.changeLoanFee(10)

App.takeLoan('Erick@gmail.com',2000,24)

console.log(App.findUser('Rafael@gmail.com'))
console.log(App.findUser('Rafael@gmail.com').account)
console.log(App.findUser('Pedro@gmail.com'))
console.log(App.findUser('Pedro@gmail.com').account)
console.log(App.findUser('Erick@gmail.com'))
console.log(App.findUser('Erick@gmail.com').account)
