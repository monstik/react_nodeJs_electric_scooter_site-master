import dotENV from 'dotenv'
import nodemailer from 'nodemailer';
dotENV.config();


class MailService {
    constructor() {

        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {

                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        })
    }

    async sendFormOnMail(name, phoneNumber){
        try {

            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.SMTP_USER,
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