"use client"

import { useState } from "react"

function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    location: "",
    contactNumber: "",
    lastDonation: "",
    medicalConditions: "",
  })

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for registering as a donor! We will contact you soon.")
  }

  // Mock user data
  const userStats = {
    totalDonations: 8,
    pointsEarned: 320,
    livesImpacted: 24,
    nextEligibleDate: "March 15, 2024",
  }

  const recentActivity = [
    { date: "2024-01-15", type: "Blood Donation", points: 50, location: "City Hospital" },
    { date: "2023-11-20", type: "Blood Donation", points: 50, location: "Red Cross Center" },
    { date: "2023-09-10", type: "Platelet Donation", points: 75, location: "Medical Center" },
    { date: "2023-07-05", type: "Blood Donation", points: 50, location: "Community Center" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Become a Blood Donor</h1>
          <p className="text-lg text-gray-600">Register to save lives and earn points</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Donor Registration Form</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      min="18"
                      max="65"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your age"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group *</label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select your blood group</option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your city/area"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Blood Donation Date</label>
                  <input
                    type="date"
                    name="lastDonation"
                    value={formData.lastDonation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions (if any)</label>
                  <textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Please mention any medical conditions or medications"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{" "}
                    <span className="text-red-500 hover:underline cursor-pointer">terms and conditions</span> and
                    confirm that the information provided is accurate.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold text-lg transition-colors"
                >
                  Register as Donor
                </button>
              </form>
            </div>
          </div>

          {/* Stats and Activity Sidebar */}
          <div className="space-y-6">
            {/* Points Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Donations</span>
                  <span className="text-2xl font-bold text-red-500">{userStats.totalDonations}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Points Earned</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                    {userStats.pointsEarned} pts
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Lives Impacted</span>
                  <span className="text-2xl font-bold text-green-500">{userStats.livesImpacted}</span>
                </div>
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Donation Eligibility</h3>
              <p className="text-green-700 text-sm mb-3">You can donate again on:</p>
              <p className="text-lg font-semibold text-green-800">{userStats.nextEligibleDate}</p>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{activity.type}</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                        +{activity.points} pts
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{activity.location}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rewards Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Rewards Program</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Blood donation: 50 points</li>
                <li>• Platelet donation: 75 points</li>
                <li>• Plasma donation: 60 points</li>
                <li>• Referral bonus: 25 points</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate