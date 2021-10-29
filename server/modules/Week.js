import mongoose from 'mongoose'

const Week = new mongoose.Schema({

    week: {type: String, required: true}, 
    mon : {type: Array},
    tue : {type: Array},
    wed : {type: Array},
    thu : {type: Array},
    fri : {type: Array},
    sat : {type: Array},
    sun : {type: Array},
    storage: {type: Array}
    
})

export default mongoose.model('Week', Week);