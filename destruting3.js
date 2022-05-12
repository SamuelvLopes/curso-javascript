function rand({ min = 0, max = 1000 }){

    const valor=Math.random() * (max-min)+min;
 return Math.floor(valor);
}
const obj ={ max:10 , min:5};
console.log(rand({min:10,max:50}));
console.log(rand({}));
console.log(rand(obj));
