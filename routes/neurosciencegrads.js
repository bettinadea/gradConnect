 // Get all of our friend data
var data = require('../neurosciencegradsdata.json');

exports.view = function(req, res){
	console.log(data);
	res.render('neurosciencegrads', data);
};