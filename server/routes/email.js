var express = require('express');
var bodyParser = require('body-parser')
var router  = express.Router();

var jsonParser = bodyParser.json();
router.post('/send-mail',jsonParser,function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body.email);
  res.send(req.body.email);
  
});


module.exports = router;
