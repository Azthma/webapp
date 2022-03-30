'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('animes', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      anime_title_id: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      synopsis: {
        type: Sequelize.TEXT,
      },
      genre: {
        type: Sequelize.TEXT,
      },
      director: {
        type: Sequelize.STRING
      },
      producer: {
        type: Sequelize.STRING,
      },
      music: {
        type: Sequelize.STRING,
      },
      studio: {
        type: Sequelize.STRING,
      },
      episodes: {
        type: Sequelize.INTEGER,
      },
      picture_name: {
        type: Sequelize.STRING,
      },
      picture: {
        type: Sequelize.BLOB('long'),
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      deleted_at: {
        type: Sequelize.DATE,
        defaultValue: null
      }
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('animes');
  }
};
