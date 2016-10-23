var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/carehud';


router.get('/getAll', function(req, res){
	MongoClient.connect(url, function(err, db) {
		db.collection('coc').find().toArray(function (err, docs) {
        	res.json(docs);
	  		db.close();
    	});
	});
});

router.post('/updateClients', function(req, res){
	MongoClient.connect(url, function(err, db) {
		db.collection('coc').update({name:"Gateway 180"},  { $set: { clients: req.body.clients } });
  		db.close();
  		res.json({updated: true});
	});
});

module.exports = router;
