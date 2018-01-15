let express = require('express');
let nodemailer = require('nodemailer');
let router = express.Router();
let publicIP = require('public-ip');
let locationIP = require('iplocation');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homePage', { title: 'Home', javaScript: 'homeJS'});
});

router.get('/getIP', function(req, res) {
    publicIP.v4().then(ip => {
        locationIP(ip, function (err, result) {
            res.json(result);
        })
    });
});

router.post('/sendMail', function(req, res) {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "maleta96@gmail.com", // generated ethereal user
            pass: ':~EXs>p7JzuF)NHy\n'  // generated ethereal password
        }
    });

    let mailOptions = {
        from: req.query.uName, // sender address
        to: 'nmmaleta@gmail.com', // list of receivers
        subject: req.query.uSubject, // Subject line
        html: `${req.query.uMessage}<br><br> ${req.query.uEmail}<br> Sent from <b>Maleta</b>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent');
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    res.json({result: true})
});



module.exports = router;
