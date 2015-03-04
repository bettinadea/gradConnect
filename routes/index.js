// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	//res.render('index', data);
	var random_num = Math.random();

	if(random_num > 0.5){
  	 	res.render("index", data);
  	}else{
    	res.render("index_alternate", data);
  	}
};