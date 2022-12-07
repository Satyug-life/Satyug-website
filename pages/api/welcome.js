
  export default function (req, res) {
    require('dotenv').config();
    // const PASSWORD = process.env.password;
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'satyug@satyug.life',
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: 'Satyug',
      to: req.body.email,
      subject: `Welcome to the Satyug`,
      text: "Welcome to the World of Satyug",
      html: `<div>
            <img src="${req.body.img}" alt="Satyug Logo" height="200px"/><br><br>
            <b>सतयुग की दुनिया में आपका स्वागत है!!</b>
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