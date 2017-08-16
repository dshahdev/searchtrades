var mysql=require('mysql');
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'shel13ware',
    database:'ang'
});

module.exports=connection;