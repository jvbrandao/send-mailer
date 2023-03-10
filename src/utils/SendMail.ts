import nodemailer from 'nodemailer';
require("dotenv").config();

class SendMail {
  async execute(receivers, subject, mailBody) {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    const mail = await transport.sendMail({
      from: process.env.MAIL_USER,
      to: receivers,
      subject: `${subject} - Fengari Mailer`,
      html: mailBody,
    });

    return mail;
  }
}

export { SendMail };
