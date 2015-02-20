 // Get all of our friend data
var data = require('../humancognitionprofessorsdata.json');

exports.view = function(req, res){
	console.log(data);
	res.render('humancognitionprofessors', data);
};