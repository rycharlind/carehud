var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/carehud';


router.get('/getAll', function(req, res){
	MongoClient.connect(url, function(err, db) {
		db.collection('disabilities').find().toArray(function (err, docs) {
        	res.json(docs);
	  		db.close();
    	});
	});
});

router.get('/getTypes', function(req, res){
	var typeGraph=[];
	MongoClient.connect(url, function(err, db) {
		db.collection("disabilities").find({DisabilityType: 5}).count(function(err, count) {
			typeGraph.push(["5", count]);
			db.collection("disabilities").find({DisabilityType: 6}).count(function(err, count) {
				typeGraph.push(["6", count]);
				db.collection("disabilities").find({DisabilityType: 7}).count(function(err, count) {
					typeGraph.push(["7", count]);
					db.collection("disabilities").find({DisabilityType: 8}).count(function(err, count) {
						typeGraph.push(["8", count]);
						db.collection("disabilities").find({DisabilityType: 9}).count(function(err, count) {
							typeGraph.push(["9", count]);
							db.collection("disabilities").find({DisabilityType: 10}).count(function(err, count) {
								typeGraph.push(["10", count]);
								res.json(typeGraph);
							});
						});
					});
				});
			});		
		});
	});
});



module.exports = router;
