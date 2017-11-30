var express = require('express');
var router  = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;

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

    var options = {
        root: '/home/martin/Programación/node/informatica/server/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
      };
    
      var fileName ='output.pdf';
      res.sendFile(fileName, options, function (error) {
          console.log(error);
      });
})

module.exports = router;
