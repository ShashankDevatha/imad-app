var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
    user : 'sasankdevatha11',
    database : 'sasankdevatha11',
    host : 'db.imad.hasura-app.io',
    port :5432,
    password : process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
const pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('select * from test',function (err,result)
    {
        if(err)
        {
            res.status(500).send(err.toString(result));
        }
        else
        {
            res.send(JSON.stringify(result));
        }
    });
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter =0;
app.get('/counter', function (req, res) {
    counter+=1;
    res.send(counter.toString());
    
});
  

app.get('/article-one',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-one.html'));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname,"ui","article-two.html"));
});

app.get('/article-three',function(req,res){
    res.send('article three requested is served');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
