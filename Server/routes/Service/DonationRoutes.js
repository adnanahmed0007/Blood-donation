import express from "express";
import Donation from "../../controllers/Donation.js";
import verifyJwt from "../../middleware/VerifyJwt.js";
const routerDonation=express.Router();
routerDonation.post("/donation/api/register",verifyJwt,Donation);
export default routerDonation;