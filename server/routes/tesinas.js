var express = require('express');
var router  = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;
var URL = 'mongodb://informatica:***REMOVED***@localhost:27017/informatica'

router.get('/tesinas-aprobadas', function(req, res) {
    MongoClient.connect(URL, function(err, db) {
    if (err) return
    var collection = db.collection('tesinas')
        collection.find().toArray(function(err, docs) {
        console.log(docs);
        res.send(docs)
        db.close()
        })
    })
});


module.exports = router;
