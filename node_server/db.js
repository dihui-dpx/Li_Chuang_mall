const mysql = require('mysql')
const config = require('./config')

const coon = mysql.createConnection(config.db)
coon.connect();

module.exports = coon;