let isAtivo = false;
console.log(isAtivo);

 isAtivo = true;
console.log(isAtivo);

isAtivo=1;
console.log(!!isAtivo);

isAtivo=0;
console.log(!!isAtivo);

isAtivo="sa";
console.log(!!isAtivo);


console.log('verdadeiros..');
console.log(!!2);
console.log(!!-1);
console.log(!!" ");
console.log(!!"sss");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo=true));

console.log('falsos....');
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo=false));

console.log('pra finalizar');
console.log(!!(''||null||0||' '));
isAtivo= 'oooo';
console.log(isAtivo||"sshh");

