const Sequelize = require('sequelize');

const AnimeSchema = {
    id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    manga_title_id: {
        type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    synopsis: {
      type: Sequelize.TEXT,
    },
    author: {
      type: Sequelize.STRING
    },
    artist: {
      type: Sequelize.STRING,
    },
    genre: {
      type: Sequelize.TEXT,
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
};

module.exports = AnimeSchema;
