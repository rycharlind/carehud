var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/carehud';


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/find', function(req, res){
	MongoClient.connect(url, function(err, db) {
		getMsg(db, function(docs){
			res.json(docs);
	  		db.close();
		});
	});
});

router.get('/findDisabilities', function(req, res){
	MongoClient.connect(url, function(err, db) {
		db.collection('disabilities').find().toArray(function (err, docs) {
        	res.json(docs);
    	});
	});
});


function getMsg(db, callback) {
    db.collection('client').find().toArray(function (err, docs) {
        callback(docs);
    });
}


module.exports = router;
