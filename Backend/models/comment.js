import mongoose from 'mongoose';
const Schema = mongoose.Schema
const comment = new Schema({
    name :{
        type:String,
        required:true
    },
    mail :{
        type:String,
        required:false
    },
    cmnt :{
        type:String,
        required:true
    },
})

export default mongoose.model('comment ', comment)
