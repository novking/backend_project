var rect = require('./example-1');

function solveRect(l,b){
    console.log("solve for rectangle");
    setTimeout(function(){rect(l, b, function(err,rectangle){
        if (err){
            console.log(err);
            console.log(rectangle);
        }
        else{
            setTimeout(function(){console.log("THe area " + rectangle.area())},10000);
            
            console.log("The premiter"+ rectangle.perimeter());
        }
    });},10000);
    
};


setTimeout(solveRect(2,4),3);
solveRect(3,5);
solveRect(-3,5);
