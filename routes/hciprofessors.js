 // Get all of our friend data
var data = require('../hciprofessorsdata.json');

exports.view = function(req, res){
	console.log(data);
	res.render('hciprofessors', data);
};