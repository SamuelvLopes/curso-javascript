    const teste={
        nome:'Ana',
        idade:21,
            endereco:{
                lograudouro:'Rua doze',
                cep:'51320-400'
            }

    }

    const {nome,idade} =teste;
    console.log(nome,idade);
    
    const {nome: n,idade: i} =teste;
    console.log(n,i);

    const {sobrenome,bemHumorada = true} = teste
    console.log(sobrenome,bemHumorada);