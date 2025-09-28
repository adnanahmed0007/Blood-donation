 
import RegsutratuioDonormodel from "../models/RegustrationDonor.js";

const Donation=async(req,res,next)=>
{
    try{
const user=req.user;
if (!user) {
    return res.status(403).json({ message: "Please verify your account before donating" });
  }
console.log(user._id)
 const {bloodGroup,Registerday,Address, NearestHospital}=req.body;
 if(bloodGroup&&Registerday&&Address&&NearestHospital)
 {
      const userIdInfo=user._id;
      const newdatasaved=new RegsutratuioDonormodel({
        bloodGroup:bloodGroup.trim(),
        Registerday:Registerday,
        Address:Address.trim().toLowerCase(),
        NearestHospital:NearestHospital.trim().toLowerCase(),
        userIdInfo:userIdInfo,
      })
     const chcek=await newdatasaved.save();
     if(!chcek){
        return res
        .status(404)
        .json({
            message:"we cant saved the data",
        })
     }
     return res
     .status(201)
     .json({
        message:"Donorregsiter suddcefully",
        newdatasaved

     })
 }
 else{
    return res
    .status(400)
    .json({
        message:"all the credetials are qeured"
    })
 }

 
    }
    catch(E)
    {
        console.log(E);
        return res
        .status(402)
        .json({
            message:`error occured ${E}`
        })
    }
}
export default Donation;