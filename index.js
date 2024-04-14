const express = require ('express');
const server = express();
const rotas =  require ('./rotas');
const bancoDados = require ('./src/configuração/bd');

server.use(express.json());
server.use(rotas);

bancoDados.sync(() => {console.log(`Banco de dados conectado: ${process.env.DB_NAME}`)});

//Teste conexão web servidor
server.get ('./teste', (req, res) => {
    return res.json({mensagem: 'Nossa Api está funcionando'})
});


servidor.listen (3000, () => {
    console.log('Servidor funcionando...')    
});


