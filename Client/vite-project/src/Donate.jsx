import React, { useState } from "react";
import axios from "axios";
import img from "../src/istockphoto-1415405974-612x612.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    Registerday: "",
    Address: "",
    NearestHospital: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:7655/auth/dontaion/api/donation/api/register",
        formData,
        { withCredentials: true }
      );
  console.log(res)
      setLoading(false);

      toast.success("🎉 You have registered successfully! Thank you ❤️", {
        position: "top-center",
        autoClose: 3000,
      });

      // clear form
      setFormData({
        bloodGroup: "",
        Registerday: "",
        Address: "",
        NearestHospital: "",
      });
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again.",
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-start pt-[100px] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Form Card */}
      <div className="relative bg-white bg-opacity-95 backdrop-blur-sm shadow-2xl rounded-3xl p-10 w-full max-w-lg z-10">
        <h1 className="text-3xl font-extrabold text-center text-red-600 mb-3 animate-pulse">
          Donate Blood & Save Lives
        </h1>
        <p className="text-center text-gray-700 mb-6">
          “Your single act of kindness today can save multiple lives tomorrow.”
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Blood Group */}
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

          {/* Donation Day */}
          <input
            type="date"
            name="Registerday"
            value={formData.Registerday}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />

          {/* Address */}
          <input
            type="text"
            name="Address"
            placeholder="Enter Your Full Address"
            value={formData.Address}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />

          {/* Nearest Hospital */}
          <input
            type="text"
            name="NearestHospital"
            placeholder="Nearest Hospital / Center"
            value={formData.NearestHospital}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition transform hover:scale-105"
          >
            {loading ? "Processing..." : "Donate & Save Lives"}
          </button>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Donate;
