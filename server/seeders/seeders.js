'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Todos', [{
            title: 'This is a test to-do',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Todos', null, {});
    }
};