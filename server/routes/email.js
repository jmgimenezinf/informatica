var express = require('express');
var bodyParser = require('body-parser')
var router  = express.Router();
var jsonParser = bodyParser.json();
const bunyan = require('bunyan');
const nodemailer = require('nodemailer');
var email = require('../../ignorar/config.js').email;
var passEmail = require('../../ignorar/config.js').passEmail;
let logger = bunyan.createLogger({
    name: 'nodemailer'
});
logger.level('trace');
// Create a SMTP transporter object

let transporter = nodemailer.createTransport(
    {
        service: 'Gmail',
        auth: {
            user: email,
            pass: passEmail
        },
        logger,
        debug: true // include SMTP traffic in the logs
    },
    {
        from: 'Dpto.Informática(UNPSJB) <>',
        headers: {
            'X-Laziness-level': 1000 // just an example header, no need to use this
        }
    }
);
console.log('SMTP Configured');
// Message object

router.post('/send-mail',jsonParser,function (req, res) {

    req.setHeader('Content-type', 'application/json');
console.log("holaaa");
  if (!req.body) return res.sendStatus(400);
    if(req.body.email!=null){
        let message = {
            // Comma separated list of recipients
            //   to: req.body.apellido + " "+ req.body.nombre +" "+
            // to:'<'+req.body.email.trim()+'>',
            
            to:'Gimenez Juan Martín <'+req.body.email.trim()+'>',
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
        console.log( "estoy aca:"+req.body.richEdit);
        transporter.sendMail(message, (error, info) => {
                if (error) {
                    console.log('Error occurred');
                    console.log(error.message);
                    transporter.close();
                    res.send(error.message)
                }else{
                    console.log('Message sent successfully!');
                    console.log('Server responded with "%s"', info.response);
                    transporter.close();
                    res.send("¡Mensaje enviado!");      
                }})
    }else{
        res.send("email vacio");              
    };
});



module.exports = router;
