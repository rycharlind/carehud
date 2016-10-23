var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/carehud';


router.get('/getAll', function(req, res){
	MongoClient.connect(url, function(err, db) {
		db.collection('employmentEducation').find().toArray(function (err, docs) {
        	res.json(docs);
	  		db.close();
    	});
	});
});

router.get('/getEmployment', function(req, res){
	var employmentGraph=[];
	MongoClient.connect(url, function(err, db) {
		db.collection("employmentEducation").find({Employed: 0}).count(function(err, count) {
			employmentGraph.push(["0", count]);
			db.collection("employmentEducation").find({Employed: 1}).count(function(err, count) {
				employmentGraph.push(["1", count]);
				db.collection("employmentEducation").find({Employed: 8}).count(function(err, count) {
					employmentGraph.push(["8", count]);
					res.json(employmentGraph);
				});
			});
		});
	});
});

module.exports = router;
