var express = require('express');
var router  = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;
var URL = 'mongodb://localhost:27017/admin'

router.get('/novedades', function(req, res) {
    MongoClient.connect(URL, function(err, db) {
    if (err) return
    var collection = db.collection('novedades')
        collection.find().toArray(function(err, docs) {
        res.send(docs[0])
        db.close()
        })
    })
});


module.exports = router;
