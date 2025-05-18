const mongoose=require("mongoose")
const connectDB=async()=>{
    await mongoose.connect(process.env.mongoURI).then(()=>{
    console.log("mongodb Connected")
}).catch((err)=>{
console.log(err)
})}

module.exports=connectDB
// mongodb://127.0.0.1:27017/blogeditor