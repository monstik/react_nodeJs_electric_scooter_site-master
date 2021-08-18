import mailService from '../service/mail-service.js';
import {body, validationResult, sanitizeBody} from "express-validator";




class MailController{
    async sendUniversalForm(req, res, next){
        try{

            console.log(req.body);

              const {name, phoneNumber} = req.body;
            sanitizeBody();
            console.log({name, phoneNumber})
              await mailService.sendUniversalFormOnEmail(name, phoneNumber);
            return res.status(200).json('ok');
        }catch (e){
            console.log('error');
            return res.status(500).json('error');
        }


    }

    async sendPriceForm(req, res, next){
        try{
            const {text, phoneNumber, contactType} = req.body;


        }catch (e){
            console.log(e);
            return res.status(500).json('error');
        }
    }
}


export default new MailController();