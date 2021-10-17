import express from 'express';
import config from 'config';
import mongoose from 'mongoose';
import authRouter from './router/router.auth.js';


const app = express();
const PORT = config.get('serverPort');
const URL_DB = config.get('URL_DB'); 

app.use(express.json());
app.use('/', authRouter);

async function appStart() {
    try {
        await mongoose.connect(URL_DB, async () => {

            app.listen(PORT, () => {
                console.log(`server started PORT ${PORT}`);
            })
        })
    } catch (error) {
        console.log(error);
    }
}

appStart();

