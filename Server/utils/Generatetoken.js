import jwt from "jsonwebtoken";
 
const mySecretKey="adnan"
 const Generatedtoken=async(user_id,res)=>
 {
    const token=jwt.sign({user_id},mySecretKey,{expiresIn:"15d"});
  console.log(token)
    res.cookie("jwt",token,{
 maxAge:15*24*60*60*1000,
        httpOnly:true,

    })
return token;

 }
 export default Generatedtoken;