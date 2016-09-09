var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

app.enable('trust proxy');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use('/api', require('./routes/api'));

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function hideSequelizeError(err, req, res, next){
	if (err.name.toLowerCase().indexOf('sequelize') !== -1) {
		var err = new Error('Database error.');
		err.status = 500;
	}
	next(err);
});

app.use(function onNotFound(err, req, res, next){
	res.status(404).sendFile(path.join(__dirname, '/public/error-404.html'));
});

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err
	});
});

module.exports = app;
