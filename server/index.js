import dotENV from 'dotenv';
import express from 'express';
import router from "./router/index.js";
import bodyParse from "body-parser";


dotENV.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use('/api', router);



const startApp = async () => {
    try {
        app.listen(PORT, () => {
            console.log('SERVER STARTED ON PORT ' + PORT);
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();


