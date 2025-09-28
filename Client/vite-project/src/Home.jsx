 import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-red-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white flex flex-col justify-center items-center py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* Optional: Add subtle animated shapes */}
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
          Give the Gift of Life
        </h1>
        <p className="text-lg md:text-2xl mb-10">
          One donation can save up to <span className="font-bold">3 lives</span>. Be a hero today!
        </p>

        <div className="flex flex-wrap gap-4 justify-center z-10">
          <Link
            to="/signup"
            className="bg-yellow-400 hover:bg-yellow-300 text-red-700 font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-white hover:bg-gray-100 text-red-600 font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all"
          >
            Login
          </Link>
          <Link
            to="/donate"
            className="bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all"
          >
            Donate Now
          </Link>
        </div>
      </section>

      {/* Motivational Cards with Glassmorphism */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Save Lives",
              text: "Your blood donation can save lives. Every drop counts and brings hope.",
              link: "/donate",
              linkText: "Donate Today"
            },
            {
              title: "Be a Hero",
              text: "Heroes aren’t born, they donate. Join thousands of volunteers making a difference.",
              link: "/signup",
              linkText: "Join Now"
            },
            {
              title: "Impact Your Community",
              text: "Blood donation strengthens your community and gives hope to families.",
              link: "/search",
              linkText: "Find Donors"
            }
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center hover:scale-105 transform transition-all"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-3">{card.title}</h3>
              <p className="text-gray-700 mb-4">{card.text}</p>
              <Link to={card.link} className="text-red-600 font-semibold hover:underline">
                {card.linkText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section with Animated Numbers */}
      <section className="bg-gradient-to-r from-red-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "12,000+", label: "Lives Saved" },
              { number: "8,500+", label: "Active Donors" },
              { number: "1,200+", label: "Blood Drives Conducted" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                <h3 className="text-5xl font-extrabold text-red-500 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8 mt-auto">
        <p className="font-medium">© 2025 BloodConnect. Be the reason someone survives today.</p>
      </footer>
    </div>
  );
};

export default Home;



