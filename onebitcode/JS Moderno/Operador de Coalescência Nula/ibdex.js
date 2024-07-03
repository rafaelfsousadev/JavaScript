const a = 0 // false

const b = null //false

const c = 'teste' //true

console.log(a || b || c) // normal

console.log(a ?? b ?? c) //Operador de Coalescência Nula