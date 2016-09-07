//modules
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,'./client')));

app.listen(6777, function(){
 console.log("listening on port 6777");
});
