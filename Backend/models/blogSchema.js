const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    content:{
        type:String
    },
    tags:{
        type:[String],
    },
    status:{
        type:String,
        enum:['draft','published'],
        default:"draft"
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    },
})

const blogmodel=mongoose.model('blog',blogSchema)
module.exports=blogmodel