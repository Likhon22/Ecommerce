import nodemailer from 'nodemailer';
import config from '../config';
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: config.nodemailer.admin_email,
    pass: config.nodemailer.admin_email_auth_password,
  },
});
const sendMail = async (content: {
  to: string;
  subject: string;
  text: string;
}) => {
  console.log(
    config.nodemailer.admin_email,
    config.nodemailer.admin_email_auth_password,
  );

  try {
    await transporter.sendMail({
      from: '"EasyWear "',
      to: content.to,
      subject: content.subject,
      text: content.text,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
