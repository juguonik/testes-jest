'use strict';

const { faker } = require('@faker-js/faker')
const fakeName = faker.name.findName()
const fakeEmail = faker.internet.email()


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Psicologos', [{
      nome: fakeName,
      email: fakeEmail,
      senha: 'blabla',
      bairro: 'teste',
      apresentacao: 'bla bla bla',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
   },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
