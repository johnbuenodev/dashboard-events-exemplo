var express = require('express');
var morgan = require('morgan');

var app = express();

var bodyParser = require('body-parser');
var cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
//app.use(express.json());
app.use(cors());

app.use(function(req,res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods",'DELETE, PUT');
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//app.use(express.static('www'));
app.use(express.static(__dirname + '/www'));
/*
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port: ' + app.get('port'));
}); */

//const PORT = process.env.PORT || 8080;
//var port=process.env.PORT;
app.listen(process.env.PORT || 3000 , function(){
  //console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  console.log("Node app is running at localhost:" + app.get('port'));
  //console.log(port);
});
