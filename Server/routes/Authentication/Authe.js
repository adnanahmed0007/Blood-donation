import express from "express";
 import Signupuser from "../../controllers/Signup.js";
const router=express.Router();
router.post("/signup",Signupuser);
 
export default router;
