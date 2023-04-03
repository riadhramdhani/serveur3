const express=require("express")
const app=express()
const connectDB=require("./config/connexion.js")
connectDB()
app.use(express.json());
app.use("/api/products",require("./routes/product"));




const port=3900
app.listen(port,()=>console.log("server is runing"))