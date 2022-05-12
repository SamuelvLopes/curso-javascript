//explica a tabela verdade....
function compras(trabalho1,trabalho2){
    const comprarsoverte = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprartv32 =trabalho1 != trabalho2;
    const mantersaudavel= !comprarsoverte;

    return {
        comprarsoverte,
        comprarTv50,
        comprartv32,
        mantersaudavel
        }

}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));
