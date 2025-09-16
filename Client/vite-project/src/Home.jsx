 import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-red-500 text-white flex flex-col justify-center items-center py-32 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          Give the Gift of Life
        </h1>
        <p className="text-lg md:text-xl mb-8">
          One donation can save up to <span className="font-semibold">3 lives</span>. Be a hero today!
        </p>

        <div className="space-x-4">
          <Link
            to="/signup"
            className="bg-yellow-400 hover:bg-yellow-300 text-red-600 font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-white hover:bg-gray-100 text-red-500 font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
          >
            Login
          </Link>
          <Link
            to="/donate"
            className="bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
          >
            Donate Now
          </Link>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Save Lives</h3>
            <p className="text-gray-600 mb-4">
              Your blood donation can save lives. Every drop counts and brings hope to someone in need.
            </p>
            <Link
              to="/donate"
              className="text-red-500 font-semibold hover:underline"
            >
              Donate Today
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Be a Hero</h3>
            <p className="text-gray-600 mb-4">
              Heroes aren’t born, they donate. Join thousands of volunteers who make a difference every day.
            </p>
            <Link
              to="/signup"
              className="text-red-500 font-semibold hover:underline"
            >
              Join Now
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Impact Your Community</h3>
            <p className="text-gray-600 mb-4">
              Blood donation strengthens your community and gives hope to families waiting for a miracle.
            </p>
            <Link
              to="/search"
              className="text-red-500 font-semibold hover:underline"
            >
              Find Donors
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Motivational Numbers */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-red-500 mb-2">12,000+</h3>
              <p className="text-gray-600">Lives Saved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-red-500 mb-2">8,500+</h3>
              <p className="text-gray-600">Active Donors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-red-500 mb-2">1,200+</h3>
              <p className="text-gray-600">Blood Drives Conducted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-auto">
        <p>© 2025 BloodConnect. Be the reason someone survives today.</p>
      </footer>
    </div>
  )
}

export default Home


