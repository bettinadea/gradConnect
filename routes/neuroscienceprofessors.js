 // Get all of our friend data
var data = require('../neuroscienceprofessorsdata.json');

exports.view = function(req, res){
	console.log(data);
	res.render('neuroscienceprofessors', data);
};