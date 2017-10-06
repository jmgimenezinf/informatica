var express = require('express');
var bodyParser = require('body-parser')
var router  = express.Router();
var gmail = require('../mail/gmail');
var jsonParser = bodyParser.json();
const bunyan = require('bunyan');
const nodemailer = require('nodemailer');
let logger = bunyan.createLogger({
    name: 'nodemailer'
});
logger.level('trace');
// Create a SMTP transporter object

let transporter = nodemailer.createTransport(
    {
        service: 'Gmail',
        auth: {
            user: '***REMOVED***',
            pass: ''
        },
        logger,
        debug: true // include SMTP traffic in the logs
    },
    {
        from: 'Dpto.Informática(UNPSJB) <***REMOVED***>',
        headers: {
            'X-Laziness-level': 1000 // just an example header, no need to use this
        }
    }
);
console.log('SMTP Configured');
// Message object

router.post('/send-mail',jsonParser,function (req, res) {
  if (!req.body) return res.sendStatus(400);
  let message = {
      // Comma separated list of recipients
      to: 'Gimenez Juan Martín <***REMOVED***>',
      // Subject of the message
      subject: 'Consultas WEB ' + req.body.apellido +" " + req.body.nombre, //
      // plaintext body
      text:"",
      // HTML body
      html: req.body.richEdit,
      // Apple Watch specific HTML body
      watchHtml: req.body.richEdit,
  };

  console.log('Sending Mail');
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Error occurred');
      console.log(error.message);
      return;
      }
      console.log('Message sent successfully!');
      console.log('Server responded with "%s"', info.response);
      transporter.close();
  });
  res.send(req.body.richEdit);  
});



module.exports = router;
