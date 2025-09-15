import mongoose from "mongoose";
const Doneruser=new mongoose.Schema({
name:
{
    type:String,
    required:true,

},
age:
{
    type:Number,
    requiredL:true,
},
 
email:
{
    type:String,
    required:true,
},
phone:
{
    type:Number,
    required:true,
},
bloodGroup:
{
    type:Number,
    required:true,
},
password:
{
    type:String,
    required:true,
}
},{timestamps:true})

const DonorUserexport=mongoose.model("Donoruser",Doneruser);
export default DonorUserexport;