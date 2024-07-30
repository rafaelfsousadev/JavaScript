function group(){
    console.log('Export nomeado não-inline (agrupado)')
}

function a (){}
function b (){}
function c (){}

export { group,a,b,c}

export default exportDefault

//podemos exportar varias funçãos ao mesmo tempo um grupo 