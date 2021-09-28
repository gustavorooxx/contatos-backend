'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'testeMigration',
      {
        id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrment:true},
        nome: {type: Sequelize.DataTypes.STRING(45), allowNull: false},
        email: {type: Sequelize.DataTypes.STRING(45), allowNull: false},
        senha: Sequelize.DataTypes.STRING(256)
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('testeMigration');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
