import React, { useState } from "react";
import axios from "axios";
import img from "../src/istockphoto-1415405974-612x612.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
const SearchBlood = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    NearestHospital: "",
    phone: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        bloodGroup: formData.bloodGroup.trim(),
        NearestHospital: formData.NearestHospital.trim().toLowerCase(),
        phone: formData.phone.trim(),
        query: formData.query.trim(),
      };
      

      const res = await axios.post(
        "http://localhost:7655/auth/dontaion/api/donation/api/get", // your API endpoint
        payload,
        { withCredentials: true }
      );
      console.log(res.data);

      setLoading(false);
      toast.success("✅ Your request has been submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/results", { state: { donors: res.data.fectchadat } });

      setFormData({
        bloodGroup: "",
        NearestHospital: "",
        phone: "",
        query: "",
      });
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again.",
        { position: "top-center", autoClose: 3000 }
      );
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-start pt-[100px] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative bg-white bg-opacity-95 backdrop-blur-sm shadow-2xl rounded-3xl p-10 w-full max-w-lg z-10">
        <h1 className="text-3xl font-extrabold text-center text-red-600 mb-3 animate-pulse">
          Search Blood & Request Help
        </h1>
        <p className="text-center text-gray-700 mb-6">
          “Find the right donor at the right time. Every request matters.”
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            type="text"
            name="NearestHospital" // ✅ matches state key
            placeholder="Enter Hospital / Center Name"
            value={formData.NearestHospital}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />

          <textarea
            name="query"
            placeholder="Write your message or requirement here..."
            value={formData.query}
            onChange={handleChange}
            rows="4"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition transform hover:scale-105"
          >
            {loading ? "Processing..." : "Submit Request"}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SearchBlood;

