const express = require ('express');
const rota = express.Router(); //criar rotas de forma modularizada, assim possibilitando criar um arquivo separado de manipulação de rotas.
const usuarioControlador = require ('./src/controladores/usuarioControlador');

//Rota cadastro
rota.use ('/cadastro', usuarioControlador.adicionar);
  
module.exports = rota;