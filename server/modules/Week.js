import mongoose from 'mongoose'

const Week = new mongoose.Schema({
    day : {type: String, required: true},
    time: {type: String},
    event: {type: string},
    file: [{type: ObjectId, ref: false}] //?
})
