const sequelize = require ('sequelize');
const bancoDados = require ('../configuração/bd');

const usuario = bancoDados.define("usuario", {
  cpf: {
    type: sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  nome: {
    type: sequelize.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: sequelize.INTEGER,
    allowNull: false,
    unique: true,
  }
});


module.exports = usuario;

/*

Perfil.belongsTo(Aluno, {
    constraint: true,
    foreingKey: "alunoId",
    allowNull: false
})


*/


