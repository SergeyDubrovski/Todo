import express from 'express'
import config from 'config'
import mongoose from 'mongoose'

const app = express();
const PORT = config.get('serverPort');

app.use(express.json);
console.log(PORT);

app.listen(PORT, () => {
    console.log(`server started PORT ${PORT}`);
})

