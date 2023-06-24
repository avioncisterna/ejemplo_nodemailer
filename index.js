require("dotenv").config();
const nodemailer = require("nodemailer");
console.log(process.env.PASSWORD);

exports.enviar = () => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CORREO,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.CORREO,
    to: "avion.cisterna@gmail.com",
    subject: "Mi primer correo con Nodemailer",
    text: "El correo ha sido enviado con Nodemailer.",
    html: "<h1>Prueba H1<h1/>",
    attachments: [
        {
            filename: "01.png",
            path: "01.png"
        }
    ]
  };
  
  transporter.sendMail(mailOptions, (err, response) => {
    console.log(response);
  });
};
