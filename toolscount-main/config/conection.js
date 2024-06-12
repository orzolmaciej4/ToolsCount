const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'toolscount'
});

connection.connect((err)=>{
    if(err){
        console.log('Error: '+err)
    }else{
        console.log('DataBase connected')
    }
});

module.exports= connection;