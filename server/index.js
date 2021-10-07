import express from 'express'
import config from 'config'
import mongoose from 'mongoose'

const app = express();
const PORT = config.get('serverPort');
const URL_DB = 'mongodb+srv://sedusedu:Serg1990@todo.melva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json);

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

