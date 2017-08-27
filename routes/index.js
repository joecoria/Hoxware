var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hoxware' });
});

/* GET send */
router.get('/send', function(req, res, next) {
  	var email=req.query.email;
  	var name=req.query.name;


  	console.log("=============");
  	console.log(email);
  	console.log(name);
  	console.log("=============");




				  var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
				  console.log(process.env.SENDGRID_USERNAME);
				  sendgrid.send({
				    to : "rulotico@gmail.com",
				    from: email,
				    subject: "Desde Hoxware",
				    text: "Email:" + email +" | Message:"+ name,
				    html: "<h2>" + email +"</h2><br><p>"+name+"</p>"

				  }, function(err, json) {
					    if (err) {
					      return console.error(err);
					      res.end("error");
					    }else{
					      res.end("sent");
					    }
				    console.log(json);

				  });


});

module.exports = router;
