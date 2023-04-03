const mongoose=require ("mongoose")
const Schema=mongoose.Schema
productSchema =new Schema({
    name:{
        type:String,
        required :true
    },
    image:{
        type:String
    },
    price:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Product",productSchema)