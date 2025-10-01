import mongoose from "mongoose";
const RegsutratuioDonor=new mongoose.Schema({
    
    bloodGroup:
{
    type:String,
    required:true,
     enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]

},
    Registerday:
    {
        type:String,
        required:true,
    },
    Address:
    {
        type:String,
        required:true,
    },
    NearestHospital:
    {
        type:String,
        required:true,
    },
    userIdInfo:
    {
        type:mongoose.Schema.ObjectId,
        ref:"Donoruser"
    }
    ,
    phoneNumber:
    {
        type:Number,
        required:true,
    }

},{timestamps:true})
const RegsutratuioDonormodel= mongoose.model("RegustrationDono",RegsutratuioDonor);
export default RegsutratuioDonormodel;