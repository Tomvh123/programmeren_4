/**
 * Created by tom on 31-5-2017.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'tom',
    password: 'secret',
    database: 'world'
});

connection.connect();

connection.query('SELECT * from cities',
function (error, rows, fields) {
    if(error){
        console.log('' + error);
    }if(rows){
        console.dir(rows);
    }

});

connection.end();