var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/carehud';


router.get('/getByUserId', function(req, res){
	MongoClient.connect(url, function(err, db) {
		console.log(req.query.uuid);
		db.collection('visitHistory').find({uuid: {$eq: parseInt(req.query.uuid)}}).toArray(function (err, docs) {
	    	res.json(docs); 
		});
	});
});

module.exports = router;
