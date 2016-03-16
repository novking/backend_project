var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = '3000';

var app = express();

app.use(morgan('dev'));

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})

.get(function(req,res, next){
    res.end('Will send all the dishes to you');
})

.post(function(req, res, next){
    res.end('Will add the dish:' +req.body.name)
});

dishRouter.route('/:ID')
.all(function(req, res, next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req, res, next){
    res.end('will send' + req.params.ID +'to you')
})
.delete(function(req, res, next){
    res.end('will delete' +req.params.ID )
})
.put(function(req, res, next){
    res.end('will put' +req.params.ID +' and the require' + req.body.name)
});

app.use('/dishes', dishRouter);
app.use(express.static(__dirname+"/public"));

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});