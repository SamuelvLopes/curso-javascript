const nome='samuel';
const sobrenome='vitor';
const cpf='434.232.754-23';
const template=`
${nome}

8+8

${2+3+3}

${cpf}

${sobrenome}
`;
console.log(template);

const up = texto => texto.toUpperCase();

console.log(`opa ${up('mermao')}`);