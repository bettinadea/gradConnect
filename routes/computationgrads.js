 // Get all of our friend data
var data = require('../clinicalgradsdata.json');

exports.view = function(req, res){
	console.log(data);
	res.render('computationgrads', data);
};