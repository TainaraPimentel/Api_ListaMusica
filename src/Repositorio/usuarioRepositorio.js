const usuario = require ('../modelos/usuario');


async function adicionar (cpf, email, nome, sobrenome, senha){

    const usuario = await usuario.create({
        cpf: cpf,
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha,
});

}


module.exports = {adicionar};
