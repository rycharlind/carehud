var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/carehud';


router.get('/getAll', function(req, res){
	MongoClient.connect(url, function(err, db) {
		db.collection('client').find().toArray(function (err, docs) {
        	res.json(docs);
	  		db.close();
    	});
	});
});

router.get('/getEthnics', function(req, res){
	var raceGraph=[];
	MongoClient.connect(url, function(err, db) {
		db.collection("client").find({White: 1}).count(function(err, count) {
			console.log(count);
			raceGraph.push({White: count});
			db.collection("client").find({Black: 1}).count(function(err, count) {
				raceGraph.push({Black: count});
				console.log(count);
				db.collection("client").find({AmIndAKNative: 1}).count(function(err, count) {
					raceGraph.push({AmIndAKNative: count});
					console.log(count);
					res.json(raceGraph);
				});
			});
		});
		
		
	});
});

module.exports = router;
