var express = require('express')
  , router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send all the dishes to you!');
})

.post(function(req, res, next){
    Dishes.create(req.body, function(err, dish){
        if (err) throw err;
        console.log(dish);
        res.json(dish);
        res.end("successfully created a new dish");
    });
})

.delete(function(req, res, next){
        Dishes.remove({}, function(err, resp){
            if (err) throw err;
           res.json(resp); 
        });
});

router.route('/:dishId')

.get(function(req,res,next){
        Dishes.findById(req.params.dishId, function(err, ))
})

.put(function(req, res, next){
        res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
});

router.delete('/:dishId', function(req, res){
        Dishes.remove(req.params.dishId, function(err, resp){
            if (err) throw err;
            res.json(resp);
        });
});





module.exports = router