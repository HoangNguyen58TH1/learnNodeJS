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
  to: 'hoang.nv.58cntt@ntu.edu.vn',
  subject: 'CV PDF',
  text: 'My Info in PDF',
  attachments: [
    // {
    //   path: 'myInfo-NVH.docx'
    // },
    // {
    //   path: 'readfile.html'
    // },
    // {
    //   path: 'image/Hoang.jpg'
    // },
    // {
    //   path: 'wordFile/CV.docx'
    // },
    // {
    //   path: 'wordFile/myInfo-NVH.docx'
    // },
    {
      path: 'CV.pdf'
    },
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