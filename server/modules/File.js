import mongoose from 'mongoose'

const File = new mongoose.Schema({

    day : {type: String, required: true},
    time: {type: String},
    event: {type: string},
    training: [{type: ObjectId, ref: 'File'}] 
})

export default mongoose.model(File, 'File'); 