export function label(attributes) {  // Podemos colocar um export antes de uma função ou uma váriavel para usar o ES module
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
  }
  
  export function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
  }
  
 export function br() {
    const element = document.createElement('br')
    return element
  }

  // posso usar o export em muitas funções diferentes a tornando modulos 