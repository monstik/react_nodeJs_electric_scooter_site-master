import mailService from '../service/mail-service.js';


class MailController{
    async send(req, res, next){
        try{

            console.log(req.body);

              const {name, phoneNumber} = req.body;
            console.log({name, phoneNumber})
              await mailService.sendFormOnMail(name, phoneNumber);
            return res.status(200).json('ok');
        }catch (e){
            console.log('error');
            return res.status(500).json('error');
        }


    }
}


export default new MailController();