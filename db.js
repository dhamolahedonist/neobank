const { create } = require('domain');
const mysql = require('mysql2')

const DB = {
    init() {
        return mysql.createConnection( {
            host: 'localhost',
            user: 'root',
            password: '',
            port: '3306',
            database: 'neobank'
        });
    },

    create(payload, account_number) {
        const { first_name, last_name, phone, email, address, bvn } = payload

        DB.init().promise().query(`
        INSERT INTO virtual_accounts
        (first_name, last_name, phone, email, address, account_number, bvn) 
        VALUES ( '${first_name}', '${last_name}', '${phone}', '${email}', '${address}', '${account_number}', '${bvn}')
        `)
    },
     phoneNumberAlreadyExist() {

    },
    emailAddressAlreadyExist() {

    },
    bvnAlreadyExist() {
    }
}


   

module.exports = DB;