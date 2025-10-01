import RegsutratuioDonormodel from "../models/RegustrationDonor.js"; 
const Search=async(req,res,next)=>
{
     try{
        const {bloodGroup,NearestHospital,phone,query}=req.body;
       
    if(bloodGroup&&NearestHospital&&phone&&query)
    {
        console.log(req.body)
        
        const fectchadat = await RegsutratuioDonormodel.find({
            bloodGroup: bloodGroup.trim(),
            NearestHospital: { $regex: new RegExp(NearestHospital.trim(), "i") },
          });
          
               if(fectchadat.length==0)
               {
                return res
                .status(404)
                .json({
                    message:"no blood group is there"
                })
               }
               else{
                return res
                .status(200)
                .json({
                    message:"we got the blood ate the nearest hospital",
                    fectchadat
                })
               }

    }
  else{
    return res
    .status(400)
    .json({
        message:"all credentials are required"
    })
  }
     }
     catch(e)
     {
        console.log(e);
        return res
        .status(500)
        .json({
            message:"internal server erroe"
        })
     }

}
export default Search;