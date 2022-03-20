const mysql = require('mysql2')

module.exports = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'neobank'
});