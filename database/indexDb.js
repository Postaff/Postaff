const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

var sequelize = null;

// if (process.env.CLEARDB_DATABASE_URL) {
//   sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
//     dialect: 'mysql',
//     host: 'us-cdbr-iron-east-04.cleardb.net',
//   });
// } else {
  sequelize = new Sequelize('postaff', process.env.SQL_DBUSER, process.env.SQL_DBPASS, {
    dialect: 'mysql',
    host: 'localhost',
  });
// }

sequelize
  .authenticate()
  .then(() => {
    console.log('🚀🚀🚀 Connection has been established successfully.🚀🚀🚀');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports.sequelize = sequelize;
