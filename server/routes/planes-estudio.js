var express = require('express');
var router  = express.Router();
var path = require('path');

router.get('/apu-folleto',function(req,res){
    var fileName =path.dirname(__dirname)+'/files/apu.pdf';
    res.setHeader('Content-disposition', 'attachment; filename= apu.pdf')
    res.setHeader('Content-type', 'application/pdf')
    res.download(fileName, 'apu.pdf', function (error) {
        console.log(error);
    })
})

router.get('/lic-informatica-folleto', function(req, res) {
      var fileName =path.dirname(__dirname)+'/files/lic_informatica.pdf';
      res.setHeader('Content-disposition', 'attachment; filename= lic_informatica.pdf')
      res.setHeader('Content-type', 'application/pdf')
      res.download(fileName, 'lic_informatica.pdf', function (error) {
          console.log(error);
      })
});
router.get('/lic-sistemas-folleto', function(req, res) {
    var fileName =path.dirname(__dirname)+'/files/lic_sistemas.pdf';
    res.setHeader('Content-disposition', 'attachment; filename= lic_sistemas.pdf')
    res.setHeader('Content-type', 'application/pdf')
    res.download(fileName, 'lic_sistemas.pdf', function (error) {
        console.log(error);
    })
});
module.exports = router;
