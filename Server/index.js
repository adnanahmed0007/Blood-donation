 
 import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/Authentication/Authe.js";

const port = 7655;
const app = express();
const mongoDb_url = "mongodb://localhost:27017/Bloodonation";

 
app.use(
  cors({
    origin: "http://localhost:5173", // allow frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/auth/api", router);

mongoose
  .connect(mongoDb_url)
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Connected to MongoDB & running on port ${port}`);
    });
  })
  .catch((e) => {
    console.log("❌ MongoDB connection error:", e);
  });


