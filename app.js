
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var clinicalcognitionchoice = require('./routes/clinicalcognitionchoice');
var clinicalprofessors = require('./routes/clinicalprofessors');
var clinicalgrads = require('./routes/clinicalgrads');
var computationchoice = require('./routes/computationchoice');
var computationgrads = require('./routes/computationgrads');
var computationprofessors = require('./routes/computationprofessors');
var hcichoice = require('./routes/hcichoice');
var hcigrads = require('./routes/hcigrads');
var hciprofessors = require('./routes/hciprofessors');
var humancognitionchoice = require('./routes/humancognitionchoice');
var humancognitiongrads = require('./routes/humancognitiongrads');
var humancognitionprofessors = require('./routes/humancognitionprofessors');
var neurosciencechoice = require('./routes/neurosciencechoice');
var neurosciencegrads = require('./routes/neurosciencegrads');
var neuroscienceprofessors = require('./routes/neuroscienceprofessors');
var discussion = require('./routes/discussion');
var faq = require('./routes/faq');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/clinicalcognitionchoice', clinicalcognitionchoice.view);
app.get('/clinicalprofessors', clinicalprofessors.view);
app.get('/clinicalgrads', clinicalgrads.view);
app.get('/computationchoice', computationchoice.view);
app.get('/computationprofessors', computationprofessors.view);
app.get('/computationgrads', computationgrads.view);
app.get('/hcichoice', hcichoice.view);
app.get('/hciprofessors', hciprofessors.view);
app.get('/hcigrads', hcigrads.view);
app.get('/humancognitionchoice', humancognitionchoice.view);
app.get('/humancognitionprofessors', humancognitionprofessors.view);
app.get('/humancognitiongrads', humancognitiongrads.view);
app.get('/neurosciencechoice', neurosciencechoice.view);
app.get('/neuroscienceprofessors', neuroscienceprofessors.view);
app.get('/neurosciencegrads', neurosciencegrads.view);
app.get('/discussion', discussion.view);
app.get('/faq', faq.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
