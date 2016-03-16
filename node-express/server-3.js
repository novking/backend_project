var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

var port = '3000';
var hostname = 'localhost';

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.all('/dishes',function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
    console.log('this should show up at the end')
})

app.get('/dishes', function(req, res, next){
    console.log('first!');
    res.end('Will send all the dishes to you');
});

app.post('/dishes', function(req, res, next){
     res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/dishes', function (req, res, next){
    console.log('third');
    res.end('Deleting all dishes');
});

app.get('/dishes/:DID', function (req, res, next){
    console.log('first');
    res.end('Will add the dish: ' + req.body.name + ' with detail: ' + req.body.description);
});

app.put('/dishes/:DishID', function(req, res, next){
    res.write('Updating the dish: ' + req.params.DishID + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
});


app.delete('/dishes/:DID', function (req, res, next){
    res.write('Deleting' + req.params.DID );
});

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});