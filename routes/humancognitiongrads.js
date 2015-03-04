 // Get all of our friend data
var data = require('../humancognitiongradsdata.json');

exports.view = function(req, res){
	console.log(data);
	res.render('humancognitiongrads', data);
};