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

module.exports = router;
