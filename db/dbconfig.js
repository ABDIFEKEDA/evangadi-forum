const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
    user:process.env.B_USER,
    database:process.env.DB_PASSWORD,
    host:"localhost",
    password:process.env.DB_NAME,
    connectionLimit:10
});
module.exports = dbConnection.promise();