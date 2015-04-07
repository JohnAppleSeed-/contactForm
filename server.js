var fs               = require('fs');
var http             = require('http');
var express          = require('express');
var app              = express();
var server           = http.createServer(app);
var multipart        = require('connect-multiparty');
var bodyParser       = require('body-parser');
var colors           = require('colors');
var clog             = console.log;
var nodemailer       = require("nodemailer");
var serverConf       = {
  tmp  : "app/components",
  port : 3000,
  ip   : "172.31.2.34",
  start: function() {
    console.log('server started @'.blue    +
                ' http://'.green           +
                serverConf.ip + ':'.green  +
                colors.red(serverConf.port)+
                '/'.green);
  }
};

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'noreplyEmail@gmail.com',
        pass: 'password'
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multipart({
  uploadDir: serverConf.tmp
})); 

app.use('/', express.static(__dirname + '/app'));
app.use('/bower_components', 
        express.static(__dirname + '/bower_components'));

app.post('/api/emailInfo', function(req, res) {
var info = req.body.info;
var mailOptions = {
    from: 'Job Seeker', // sender address
    to: 'reciever32334324@gmail.com', // list of receivers
    subject: 'potential employee', // Subject line
    text: "Name: "   + info.Name   + "\n" + 
          "Phone: "  + info.Phone  + "\n" +
          "Email: "  + info.Email  + "\n" +
          "About: "  + info.About  + "\n" +
          "Resume: see attached",
    attachments: [{
      filename: info.Name + 'resume.pdf',
      path: info.Resume,
      contentType: 'application/pdf'
    }]
          
};

transporter.sendMail(mailOptions, function(error, info){
  if(error){
    res.send({data: "error"})   
  }else{
    res.send({data: "success"})   
  }
});
});

app.post('/api/resumeUpload', function(req, res) {
  res.send(req.files.file.path);
});

server.listen(
  serverConf.port, 
  serverConf.ip, 
  serverConf.start()
);

