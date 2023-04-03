const mongoose=require("mongoose")
const connectDB= async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/riadh1")
        console.log("databaseconnected")
    } catch (error) {
      console.log("database is not connected")  
    }
}
module.exports=connectDB