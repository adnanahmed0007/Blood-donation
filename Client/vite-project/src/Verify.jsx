 import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(""); // user enters or fetch from signup
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7655/auth/api/verifyotp", {
        email,
        otp,
      },{withCredentials:true});

      setMessage(res.data.message);

      if (res.status === 201) {
        setMessage("🎉 Your OTP is verified successfully!");
  setTimeout(() => navigate("/"),1000); 
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-4">
          Verify Your OTP 🔑
        </h1>

         {message && (
  <div
    className={`mb-4 text-center text-sm font-medium ${
      message.includes("verified") ? "text-green-600" : "text-red-500"
    }`}
  >
    {message}
  </div>
)}


        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;

