import {Router} from "express";
import MailController from '../controllers/mail-controller.js'

const router = new Router();

router.post('/postUniversalForm', MailController.sendUniversalForm);

router.post('/postPriceForm', MailController.sendPriceForm)

export default  router;