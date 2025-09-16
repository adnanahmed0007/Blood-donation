import express from "express";
 import Signupuser from "../../controllers/Signup.js";
 import verifyOtp from "../../controllers/VerifyOtp.js";
const router=express.Router();
router.post("/signup",Signupuser);
router.post("/verifyotp",verifyOtp);
 
export default router;
