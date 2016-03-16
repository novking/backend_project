var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = '3000';

var app = express();

app.use(morgan('dev'));

var ok = require('./dishRouter.js'); // it can pass as a var, or just as anomymos function inside app.use().
app.use('/dishes', ok);
app.use('/promotions',require('./promoRouter'));
//different way to make the route. 
//Router.route(path).all(function(){})
// Router.all('path',fucntion(){})
//also use middleware router.use(function(q,r,n){r.writeHead...}) can direction filter all the incoming route and pipe them
app.use('/leadership', require('./leaderRouter'));


app.use(express.static(__dirname+"/public"));

app.listen(port,hostname, function() {
  console.log('Listening on port 3000...')
});