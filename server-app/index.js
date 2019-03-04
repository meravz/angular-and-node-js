var express = require('express');
const PORT = 8888;
const app = express();

var cors=require('cors');

app.use(cors());
app.use(express.json())

app.post('/contact', function(req,res){
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'meravApp'
    });

    connection.connect(function (err) {
        
        if (err) throw err;

            var sql = 'INSERT INTO contact SET?' ;
            var values=req.body;
            connection.query(sql, values, function (err, result) {
                if (err) throw err;
                console.log("ok");
              });
            
})
});

app.post('/recipes', function(req,res){
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'meravApp'
    });

    connection.connect(function (err) {
        
        if (err) throw err;

            var sql = 'INSERT INTO recipes SET?' ;
            var values=req.body;
            connection.query(sql, values, function (err, result) {
                if (err) throw err;
                console.log("ok");
              });
            
})
});

app.get('/recipes', function(req,res){
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'meravApp'
    });

    connection.connect(function (err) {
        
        if (err) throw err;

            var sql = 'SELECT * from recipes' ;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("ok");
                res.json(result);
              });
            
}) 
});

app.listen(PORT, function () {
    console.log('server started at port' + PORT)
});
