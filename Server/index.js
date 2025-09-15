 
import express from "express";
import mongoose from "mongoose";
import router from "./routes/Authentication/Authe.js";
const port =7655;
const app=express();
const mongoDb_url="mongodb://localhost:27017/Bloodonation";
app.use(express.json())
app.use("/auth/api",router);
mongoose.connect(mongoDb_url)
.then(()=>
{
    app.listen(port,()=>
    {
        console.log(`we are connected to port  ${port} `);
    })
    
})
.catch((e)=>
{
    console.log(e);
})

