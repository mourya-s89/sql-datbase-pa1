const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"mourya@1801@",
    database:"practice1"
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("database connected to mysql server")
})

app.get('/',(req,res)=>{
    res.send('this is home page');
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})