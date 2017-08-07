var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10, 
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_emersoel',
  password        : '0583',
  database        : 'cs340_emersoel'
});

module.exports.pool = pool;