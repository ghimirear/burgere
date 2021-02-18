// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'M26monicamysql',
  database: 'burgers_db',
});

// Making connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Exporting connection for our ORM to use.
module.exports = connection;
