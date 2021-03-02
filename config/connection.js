// Set up MySQL connection.
require('dotenv').config()

const mysql = require('mysql');

var connection;
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // NOTE: Be sure to add your MySQL password here!
    password: process.env.DB_PASS,
    database: 'burgers_db',
  });
}

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;