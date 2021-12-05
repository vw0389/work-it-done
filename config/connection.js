const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, 'root', 'ChuckWoodson#42', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;

// Likely needs database name changed to a static string