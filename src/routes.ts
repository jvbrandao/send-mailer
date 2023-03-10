import { Router } from 'express';

import { MailController } from './controllers/mail/MailController';

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: true });

const router = Router();

router.post('/send-mail', urlencodedParser, new MailController().handle);

export { router };
