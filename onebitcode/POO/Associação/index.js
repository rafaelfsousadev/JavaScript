const Address = require("./address");
const person = require("./person");

const addr = new Address('7 de Setembro',99, 'Centro', 'São Fidélis', 'RJ') 
const jhon = new person('Jhon Doe', addr) // coloca uma classe como parametro de uma outra classe. assim fazendo uma associação 