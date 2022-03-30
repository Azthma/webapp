'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      movie_title_id: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.STRING,
      },
      synopsis: {
        type: Sequelize.TEXT,
      },
      genre: {
        type: Sequelize.TEXT,
      },
      director: {
        type: Sequelize.STRING,
      },
      writer: {
        type: Sequelize.STRING,
      },
      producer: {
        type: Sequelize.STRING,
      },
      cinematography: {
        type: Sequelize.STRING,
      },
      editor: {
        type: Sequelize.STRING,
      },
      music: {
        type: Sequelize.STRING,
      },
      casts: {
        type: Sequelize.TEXT,
      },
      production_companies: {
        type: Sequelize.TEXT,
      },
      running_time: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('movies');
  }
};
