"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
      await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "John Doe",
          password: "123",
          username: "fake3",
        },
        {
          email: "John Doe1",
          password: "13453",
          username: "fake4",
        },
        {
          email: "John Doe2",
          password: "14563",
          username: "fake5",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
