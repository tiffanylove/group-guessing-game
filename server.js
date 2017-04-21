console.log('linked');
//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var randomNumber = require('./public/scripts/randomNumber.js');
// var max = require('./public/scripts/client.js');

//globals
var port = 5000;



//uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true} ) );

//spin up server
app.listen( port, function(){
  console.log('server up', port);
});
//base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});

// Generate randomNum and check jSON from client
app.post('/addingNumbers', function( req, res){
  console.log(req.body.maxValue);
  var max = req.body.maxValue;
  var answer = randomNumber(1, max);
  console.log(answer);
  // for (var i in req.body) {
  //   if (objectToSend[i]=== answer){
  //     res.send('Winner');
  //   } else {res.send('Loser');
  // }
  res.send(200);
}
);
