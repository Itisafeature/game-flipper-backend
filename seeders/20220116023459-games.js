'use strict';

const {Game} = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    await Game.destroy({ where: {} });
    const game = await Game.create({
      title: "Zelda",
      publisher: "Nintendo",
      release_date: new Date(),
      current_price: 59.99,
      edition: "Limited"
    })

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
