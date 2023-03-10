import { Request, Response, response } from 'express';
import { MailService } from '../../services/mail/MailService';

class MailController {
  async handle(req: Request, res: Response) {
    const { _next: redirectPage, _subject: subject, _to: receivers } = req.body;
    console.log('redirectPage', redirectPage)

    delete req.body['_next'];
    delete req.body['_to'];
    delete req.body['_subject'];

    const dataMail = req.body;

    const mail = new MailService();

    const mailQuery = await mail.execute({ redirectPage, subject, receivers, dataMail });
    if (mailQuery instanceof Error) {
      return res.status(400);
    }

    res.redirect(mailQuery);
  }
}

export { MailController };
