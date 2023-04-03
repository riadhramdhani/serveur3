const express=require("express")
const root=express.Router()
const Product=require("../model/contact");
// root.get("/test",(req,res)=>{
//     res.send("this is a test")
// })
root.post("/addproduct",async(req,res)=>{
    const {name,image,price}=req.body
    try {
        const product=new Product({name,image,price})
        await product.save()
        res.status(201).send({msg:"product created", product})
    } catch (error) {
        res.status(500).send(error)
        
    }
})
root.get("/getproduct",async(req,res)=>{
    
    try {
        
        const product= await Product.find()
        res.status(200).send({msg:"get product", product})
    } catch (error) {
        res.status(500).send(error)
        
    }
})
root.delete("/deleteproduct/:id",async(req,res)=>{
    const {id}= req.params
    try {
        
         await Product.findByIdAndDelete(id)
        res.status(200).send({msg:" product deleted"})
    } catch (error) {
        res.status(500).send(error)
        
    }
})
root.put("/updateproduct/:id",async(req,res)=>{
    const {id}= req.params
    
    try {
        
        const updateProduct=await Product.findByIdAndUpdate(id,{$set:{...req.body}})
        
        res.status(200).send({msg:"product updated", updateProduct})
    } catch (error) {
        res.status(500).send(error)
        
    }
})
root.get("/getoneproduct/:id",async(req,res)=>{
    const {id}= req.params
    
    try {
        
        const oneproduct=await Product.findById(id)
        
        res.status(200).send({msg:"getoneproduct", oneproduct})
    } catch (error) {
        res.status(500).send(error)
        
    }
})
module.exports=root;