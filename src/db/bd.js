const Sequelize = require ('sequelize');

const sequelize = new Sequelize('callgenie', 'root', 'fatec', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;