var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title : 'article-one',
    date : 'Feb 18,2018',
    heading : 'Article-one',
    content : ` <p>
            This is the content for my First Article.Please enjoy reading
            </p>
        <p>
            This is the content for my First Article.Please enjoy reading
        </p>
        <p>
            This is the content for my First Article.Please enjoy reading
        </p>
        <p>
            This is the content for my First Article.Please enjoy reading
        </p>`,
    
};
function templatedata(data){
    var title=data.title;
    var heading=data.heading;
    var date= data.date;
    var content= data.content;
    
var htmlTemp=
`<html>
    <head>
        <title>${title}<title>
        <meta name="viewport" content="width=device-width , intial-scale=1">
        <link href="ui/style.css" rel="spreadsheet"
        </head>
    <body>
        
        <div class="container">
            <div>
            <a href="/">click here for home</a>
        </div>
        <h1>
            ${heading}
        </h1>
    <div>
        ${date}
    </div>
    <div>
       ${content}
    </div>
    </div>
    </body>
</html>`;
return htmlTemp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(templatedata(articleOne));
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
