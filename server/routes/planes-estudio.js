var express = require('express');
var router  = express.Router();

router.get('/apu-folleto', function(req, res) {
      var fileName ='/home/martin/Programación/node/informatica/server/files/apu.pdf';
      res.download(fileName, 'apu-folleto.pdf', function (error) {
          console.log(error);
      });
});
router.get('/lic-informatica-folleto', function(req, res) {
    var options = {
        root: '/home/martin/Programación/node/informatica/server/files/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
      };  
      var fileName ='lic_informatica.pdf';
      res.sendFile(fileName, options, function (error) {
          console.log(error);
      });
});
router.get('/lic-sistemas-folleto', function(req, res) {
    var options = {
        root: '/home/martin/Programación/node/informatica/server/files/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
      };  
      var fileName ='lic_sistemas.pdf';
      res.sendFile(fileName, options, function (error) {
          console.log(error);
      });
});
module.exports = router;
