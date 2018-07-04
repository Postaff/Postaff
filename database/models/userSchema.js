const bcrypt = require('bcrypt');
const db = require('../indexDb.js');
const { Sub } = require('./subSchema.js');
const { School } = require('./schoolSchema.js');
const { Admin } = require('./adminSchema.js');

const User = db.sequelize.define('user', {
  username: { type: db.sequelize.Sequelize.STRING, allowNull: false, unique: true },
  password: { type: db.sequelize.Sequelize.STRING, allowNull: false },
  role: db.sequelize.Sequelize.STRING,
});

// User.belongsTo(Sub, { foreignKey: 'fk_sub' });
// User.belongsTo(School, { foreignKey: 'fk_school' });
// User.belongsTo(Admin, { foreignKey: 'fk_admin' });

// User.create({
//   username: 'admin',
//   password: 'admin',
//   role: 'Admin',
// });

User.sync();

exports.User = User;
