var express = require('express');
var app = express();
var request = require('request');
var handlebars = require('express-handlebars').create({defaultlayout:'main'});
var session = require('express-session');

var bodyParser = require('body-parser');
app.engine('handlebars',handlebars({extname: '.handlebars', defaultLayout: false});
app.set('view engine', 'handlebars');
app.set('port', 1515);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mysql = require('./connection.js');

app.get('/',function(req,res){
  res.render('index');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
