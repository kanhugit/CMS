const mysql = require("mysql2");
require("dotenv").config();


const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Kanha@123",
database: "preserbyte_db"
});


db.connect(err => {
if (err) throw err;
console.log("MySQL Connected");
});


module.exports = db;