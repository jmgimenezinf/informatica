const MongoClient = require('mongodb').MongoClient;
var db;
var URL = 'mongodb://@localhost:27017/informatica'

MongoClient.connect(URL, function(err, db) {
  if (err) return
  var collection = db.collection('novedades')
    collection.find().toArray(function(err, docs) {
      console.log(docs[0])
      db.close()
    })
})

module.exports = db;