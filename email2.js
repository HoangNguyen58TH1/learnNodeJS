var nodemailer = require('nodemailer')

var  tranporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hoangnv20081998@gmail.com',
    pass: 'hoangtoni11'
  }
})

var content = {
  from: 'hoangnv20081998@gmail.com',
  to: 'hoangnv20081998@gmail.com, hoang.nv.58cntt@ntu.edu.vn',
  subject: 'subject title ne 222',
  text: 'text description content ne 222',
  attachments: [
    {
      path: 'myInfo-NVH.docx'
    },
    {
      path: 'filenew.txt'
    },
    {
      path: 'image/Hoang.jpg'
    }
  ]
}

tranporter.sendMail(content, function(err, info){
  if (err) {
    console.log(err);
  }
  else {
    console.log("Mail send: " + info.response);
  }
})