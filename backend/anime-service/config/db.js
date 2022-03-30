const Sequelize = require('sequelize');
const configKeys = require('./keys');
const credentials = configKeys.DATABASE[configKeys.ENV];

module.exports = new Sequelize(credentials.name, credentials.user, credentials.pass, {
  host: credentials.host,
  dialect: 'mysql',
  dialectOptions: {
    dateStrings: true,
    typeCast: function (field, next) {
      // for reading from database
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    }
  },
  timezone: '+08:00',
  define: {
    underscored: true,
    paranoid: true,
    timestamps: true
  }
});
