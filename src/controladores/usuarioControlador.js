const usuarioRepositorio = require ('../Repositorio/usuarioRepositorio');

async function adicionar (req, res) { 
    const {cpf, nome, sobrenome, email, senha} = req.body;
    const resposta = await usuarioRepositorio.adicionar(cpf, nome, sobrenome, email, senha);        
};


module.export = {adicionar};