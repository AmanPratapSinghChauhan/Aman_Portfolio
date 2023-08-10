import nodeMailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config({path:'./Config/config.env'});

export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${options.email}`,
    to: process.env.SMPT_MAIL,
    subject: options.subject,
    text: `From: ${options.name}\nEmail: ${options.email}\n\n${options.message}`,
    name:options.name,
  };

  await transporter.sendMail(mailOptions);
};
