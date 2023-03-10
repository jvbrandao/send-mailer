import { SendMail } from '../../utils/SendMail';
import { TemplateHtml } from '../../utils/TemplateHtml';

interface MailRequest {
  redirectPage: string;
  subject: string;
  receivers: string;
  dataMail: JSON;
}

class MailService {
  async execute({ redirectPage, subject, receivers, dataMail }: MailRequest) {
    const templateHtml = new TemplateHtml();
    const sendMail = new SendMail();

    if (!redirectPage || !subject || !receivers || !dataMail) {
      return Error('Message incorrect');
    }
    try {
      let mailText = ` `;
      let mailData = ` `;

      const mailerKeys = Object.keys(dataMail);

      mailerKeys.map((data) => {
        mailText += `<p style="font-family: Tahoma; font-size: 14px; font-family: verdana;"><strong>${data}:</strong> ${dataMail[data]} </p>`;
        mailData += ` ${data}: ${dataMail[data]} ; `;
      });
      const mailBody = await templateHtml.execute(subject, mailText).then((dados) => dados);
      await sendMail.execute(receivers, subject, mailBody);

      return redirectPage;
    } catch (e) {
      console.log(e);
    }
  }
}

export { MailService };
