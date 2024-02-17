// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
  ]

  console.log(arr)//vizualizar Array
  console.log(arr[0])// somente o 1 nivel
  console.log(arr[1])// somente o 2 nivel
  console.log(arr[1][0])// o 1 item do nivel 2

  // Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]

 // console.table(matriz)

 for(let i =0; i< matriz.length ; i++){
    console.log(matriz[i])
 }
