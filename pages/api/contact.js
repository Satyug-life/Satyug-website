
  export default function (req, res) {
    require('dotenv').config();
    // const PASSWORD = process.env.password;
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'satyug.token.reward@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: 'Satyug',
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.msg,
      html: `<div><p>${req.body.msg}</p>
            <img src="${req.body.img}" alt="Ramji Setu" height="200px"/><br><br>
            You can check the Reward here: ${req.body.openSeaLink}<br>
            You can also track your Transaction here: ${req.body.ethScanLink}<br><br>
            Here's Your Open Sea Account: ${req.body.openSeaAccountLink}<br>
            </div>`,
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200);
  }