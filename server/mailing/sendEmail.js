import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'

export const sendEmail = (receiver, subject, context) => {
  dotenv.config();

  // Step 1
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  transporter.use('compile', hbs({
    viewEngine: {
      extname: '.handlebars',
      layoutsDir: './mailing/templates/',
      defaultLayout:  'index',
    },
    viewPath: './mailing/templates/'
  }))

  // Step 2
  let mailOptions = {
    to     : receiver,
    subject: subject,
    template: 'index',
    context: context,
    // attachments: [{
    //   filename: 'logo-blue.png',
    //   path: process.cwd() + '/mailing/logo-blue.png',
    //   cid: 'logo-blue'
    // }]
  };
  // Step 3
  transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log("Email sent!!!!");
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
