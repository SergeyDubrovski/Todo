import mongoose from 'mongoose'

const Week = new mongoose.Schema({

    task: {
        
         type: Array 
    }
    ,
    storage: { type: Array }

})

export default mongoose.model('Week', Week);