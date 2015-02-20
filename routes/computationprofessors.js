 // Get all of our friend data
var data = require('../computationprofessorsdata.json');

exports.view = function(req, res){
	console.log(data);
	res.render('computationprofessors', data);
};