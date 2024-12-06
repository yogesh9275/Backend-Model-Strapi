const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'inpro3.fcomet.com',
  user: 'suratmat_vnr',
  password: 'avciT#9090',
  database: 'suratmat_vnr',
  port: 3306,
  ssl: false, // Set to true if SSL is required
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});
