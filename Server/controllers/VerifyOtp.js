
import DonorUserexport from "../models/DonerRegistration.js";
import Generatedtoken from "../utils/Generatetoken.js";
const verifyOtp=async(req,res)=>
{
    try{

        const {email,otp}=req.body;
        const findUsder=await DonorUserexport.findOne({$and:[{email,otp}]});
        console.log(findUsder)
        if(findUsder)
        {
            findUsder.otp=0;
            findUsder.isVerified=true,
            await Generatedtoken(findUsder._id,res)
            await findUsder.save();
            console.log(findUsder);

          
            return res
            .status(201)
            .json({
                message:"otp verified"
            })

        }
        else{
            return res
            .status(303)
            .json({
                message:"error occured"
            })

        }



    }
    catch(e)
    {
        return res
        .status(404)
        .json({
            message:`error occured+" "+${e}`
        })
    }
}
export default verifyOtp;