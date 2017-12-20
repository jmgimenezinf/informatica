var express = require('express');
var router  = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;
var path = require('path');
var URL = require('../../ignorar/config.js').mongoConection;

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

router.get('/tesinas-pdf',function(req,res){
    var fileName = path.dirname(__dirname)+'/files/tesinas.pdf';
    res.setHeader('Content-disposition', 'attachment; filename= tesinas.pdf')
    res.setHeader('Content-type', 'application/pdf')
    res.download(fileName, 'tesinas.pdf', function (error) {
        console.log(error);
    })
})

module.exports = router;
