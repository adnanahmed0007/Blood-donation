import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../src/istockphoto-1415405974-612x612.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    age: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("All data looks good! Sending OTP to your email...");

    try {
      const res = await axios.post(
        "http://localhost:7655/auth/api/signup",
        formData,
        { withCredentials: true }
      );
      console.log(res)
      setLoading(false);
      setMessage(`OTP has been sent to ${formData.email}. Please verify.`);
      setTimeout(() => {
        navigate("/verifyotp", { state: { email: formData.email } });
      }, 1500);
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.message || "Something went wrong");
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

      {/* Signup Card */}
      <div
        className="relative bg-white bg-opacity-95 backdrop-blur-sm shadow-2xl rounded-3xl p-10 w-full max-w-md mx-auto z-10"
        style={{ marginTop: "30px" }} // pushes card down below header
      >
        <h1 className="text-3xl font-extrabold text-center text-red-600 mb-3">
          Join BloodConnect ❤️
        </h1>
        <p className="text-center text-gray-700 mb-6 text-sm">
          “Your small step today can save a life tomorrow.<br />
          Be a hero. Become a donor.”
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
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
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
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
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
            {loading ? "Processing..." : "Sign Up & Save Lives"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

