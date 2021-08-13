import {Router} from "express";
import MailController from '../controllers/mail-controller.js'

const router = new Router();

router.post('/postForm', MailController.send);

export default  router;