function tratarerro(erro){

    //throw new Error(erro);
    //throw 10;
    //throw true;
    throw{
     nome:erro.name,
     msg:erro.message,
     date:new Date

    }

}
function imprimirNomeGritado(obj){
try{
    console.log(obj.name.toUpperCase()+"!!!!");
}catch(e){
    tratarerro(e);

}finally{

    console.log('final');
}
}

// certo const obj = {name:'samuel' }
const obj = {nome:'samuel' }
imprimirNomeGritado(obj)