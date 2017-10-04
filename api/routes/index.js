'use strict';

var logs = require('../controllers/logs.ctrl');

module.exports = function(router) {
	// Get the version of the application from the package.json file
	router.get('/version', function (req, res, next) {
        var currentVersion = {"version":require('../../package.json').version};
		console.log(currentVersion);
    	res.json(currentVersion);
    });

    // Get all logs
    router.get('/logs', function (req, res, next) {
		logs.getAll().then(function(datas){
			res.json(datas);
    	});
    });

    // Delete one log
	router.delete('/logs/:id', function (req, res, next) {
		logs.remove(req.params.id).then(function(datas){
			res.json(datas);
    	});
    });

    // Add a log
	router.post('/logs/', function (req, res) {
		req.body.ftl_time = new Date();
		logs.add(req.body).then(function(datas){
			res.json(datas);
    	});
    });
};