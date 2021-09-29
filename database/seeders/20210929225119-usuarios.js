'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return await queryInterface.bulkInsert('usuarios', [
      {
        id:'1',
        email:'gustavo@teste.com',
        senha: bcrypt.hashSync('123456', 10),
        nome:'Gustavo Chagas'
      },
      {
        id:'2',
        email:'iago@teste.com',
        senha: bcrypt.hashSync('123456', 10),
        nome:'Iago Nunes'
      },

    ])

  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('usuarios', null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


//executa seed expecifico
//npx sequelize db:seed --seed 20210929225119-usuarios.js