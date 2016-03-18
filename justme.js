var express = require('express');
var justme = express();

justme.get('/',function(req, res){
	res.send('Hello World!');
});

justme.listen(3000, function(){

	console.log('Example app listening on port 3000! Yehey!!! XOXO');

});
