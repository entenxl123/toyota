const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "website_db"
})

app.get('/menu', (req,res) => {
    db.query("SELECT * FROM website_db.tb_menu", (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    })
})

app.listen('3001', () => {
    console.log('Server 3001');
})