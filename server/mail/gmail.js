'use strict';
const bunyan = require('bunyan');
const nodemailer = require('nodemailer');
let logger = bunyan.createLogger({
    name: 'nodemailer'
});
var email = require('../../ignorar/config.js').email;
var passEmail = require('../../ignorar/config.js').passEmail

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
let message = {
    // Comma separated list of recipients
    to: 'Gimenez Juan Martín <'+email+'>',
    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔ #', //
    // plaintext body
    text: 'Hello to myself!',
    // HTML body
    html:
        '<h1>hola mundo</h1>',
    // Apple Watch specific HTML body
    watchHtml: '<b>Hello</b> to myself',
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