import dotENV from 'dotenv'
import nodemailer from 'nodemailer';
dotENV.config();


class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {

                user: 'd.krawets2026@gmail.com',
                pass: '25022001rLd',
            }
        })
    }

    async sendFormOnMail(name, phoneNumber){
        try {
            await this.transporter.sendMail({
                from: 'd.krawets2026@gmail.com',
                to: 'd.krawets2026@gmail.com',
                subject: 'заявка на ремонт',
                text: 'заявка на ремонт от ' + phoneNumber + ' ' + name,
                html:''
            })
        }catch(e){
            console.log('ошибка')
            console.log(e)
        }


    }
}


export default new MailService();