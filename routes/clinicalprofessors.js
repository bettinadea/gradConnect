 // Get all of our friend data
var data = require('../clinicalprofessorsdata.json');

exports.view = function(req, res){
	console.log("clinicalprofessors.js connected!");
	console.log(data);
	res.render('clinicalprofessors', data);
};