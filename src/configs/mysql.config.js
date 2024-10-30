const mysql = require("mysql2");
require("dotenv").config();

const dbConn = mysql.createPool({
  host: process.env.MYSQL_DB_HOST,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASS,
  database: process.env.MYSQL_DB_NAME,
  connectionLimit: 15,
});

module.exports = dbConn;
