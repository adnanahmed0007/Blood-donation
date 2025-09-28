import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../src/istockphoto-1415405974-612x612.jpg";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Validating credentials and sending OTP...");

    try {
      const res = await axios.post(
        "http://localhost:7655/auth/api/login",
        formData,
        { withCredentials: true }
      );

      setLoading(false);
      setMessage(res.data.message); // OTP sent message

      setTimeout(() => {
        navigate("/verifyotp", { state: { email: res.data.email } });
      }, 1500);
    } catch (err) {
      setLoading(false);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Header */}
      <header className="relative z-10 w-full py-4 bg-red-600 bg-opacity-80 text-white text-center font-bold text-xl shadow-md">
        BloodConnect
      </header>

      {/* Login Card */}
      <div
        className="relative bg-white bg-opacity-95 backdrop-blur-sm shadow-2xl rounded-3xl p-10 w-full max-w-md mx-auto z-10"
        style={{ marginTop: "200px" }}
      >
        <h1 className="text-3xl font-extrabold text-center text-red-600 mb-3">
          Login to BloodConnect
        </h1>
        <p className="text-center text-gray-700 mb-6 text-sm">
          “Enter your credentials to access your account and donate blood.”
        </p>

        {message && (
          <div
            className={`mb-4 text-center text-sm font-medium ${
              loading ? "text-blue-600" : "text-green-600"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition transform hover:scale-105"
          >
            {loading ? "Processing..." : "Login & Send OTP"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-red-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
