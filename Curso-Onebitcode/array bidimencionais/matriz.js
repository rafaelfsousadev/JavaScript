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
  /* console.log(arr)
  console.log(arr[0])
  console.log(arr[1])
  console.log(arr[1][0])
  console.log(arr[1][1])
  console.log(arr[2][1][1]) */

  //para acessar as matrizes e so colocar os []em cada hierarquia 
  // Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]
  console.table(matriz)

  matriz.push(['Nova linha']) // cria uma linha nova
  matriz[0].push('Nova coluna') // cria uma coluna nova na linha selecionada

  for(let i = 0; i< matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        const elemento = matriz[i][j]
        console.log(`Posição: (${i},${j}) valor: ${elemento}`)
    }
    console.log(matriz[i])
  }