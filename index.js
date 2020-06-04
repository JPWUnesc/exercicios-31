const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const file_path = `${__dirname}/produtos.json`;

app.get("/", (req, res) => {
    var fp = fs.readFileSync(file_path, "utf8");
    JSON.parse(fp);
    res.send({content: JSON.parse(fp)});
});

app.post("/", (req, res) => {    
    var fp = fs.readFileSync(file_path, "utf8");
    var array = [];
    if(fp != ''){
        array = JSON.parse(fp);
    }
    array.push(req.body.produto);
    fp = fs.writeFileSync(file_path, JSON.stringify(array))
});

app.listen(3000);