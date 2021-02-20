// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
  username : 'msdhvfpllzqqgumc',
  host: 'd6rii63wp64rsfb5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
 
  password: 'ra9rnrzo8axum1g5',
  database: 'v9y8y1wv7rawqras',
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
