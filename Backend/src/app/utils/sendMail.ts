/* eslint-disable @typescript-eslint/no-unused-vars */
import nodemailer from 'nodemailer';
import config from '../config';
import ApiError from '../error/ApiError';
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
  attachments?: Buffer;
}) => {
  try {
    await transporter.sendMail({
      from: '"EasyWear "',
      to: content.to,
      subject: content.subject,
      text: content.text,
      attachments: content.attachments && [
        {
          filename: 'report.pdf',
          content: content.attachments,
        },
      ],
    });
  } catch (error) {
    throw new ApiError(400, 'Failed to send email');
  }
};

export default sendMail;
