console.log('Programa iniciado!')

/* setTimeout(()=>{
    console.log('três segundo se passaram desde de que o programa foi iniciado!')
}, 3000)  //com essa função podemos criar um tempo para o codigo iniciar o fazer qualuqer coisa  */

let seconds = 0
setInterval(()=>{
    seconds +=3
    console.log(`Se passaram ${seconds} segundos.`)
}, 1000*3)