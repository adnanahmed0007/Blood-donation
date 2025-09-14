"use client"

import { useState } from "react"

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    bloodGroup: "O+",
    location: "New York, NY",
    dateOfBirth: "1990-05-15",
    emergencyContact: "+1 (555) 987-6543",
  })

  const stats = {
    totalDonations: 12,
    pointsEarned: 480,
    livesImpacted: 36,
    rank: "Gold Donor",
    nextEligibleDate: "March 15, 2024",
  }

  const donationHistory = [
    {
      id: 1,
      date: "2024-01-15",
      type: "Whole Blood",
      location: "City Hospital Blood Bank",
      points: 50,
      status: "Completed",
    },
    {
      id: 2,
      date: "2023-11-20",
      type: "Platelets",
      location: "Red Cross Center",
      points: 75,
      status: "Completed",
    },
    {
      id: 3,
      date: "2023-09-10",
      type: "Whole Blood",
      location: "Community Medical Center",
      points: 50,
      status: "Completed",
    },
    {
      id: 4,
      date: "2023-07-05",
      type: "Plasma",
      location: "University Hospital",
      points: 60,
      status: "Completed",
    },
    {
      id: 5,
      date: "2023-05-12",
      type: "Whole Blood",
      location: "City Hospital Blood Bank",
      points: 50,
      status: "Completed",
    },
  ]

  const achievements = [
    { name: "First Donation", icon: "🩸", earned: true },
    { name: "5 Donations", icon: "⭐", earned: true },
    { name: "10 Donations", icon: "🏆", earned: true },
    { name: "Life Saver", icon: "❤️", earned: true },
    { name: "25 Donations", icon: "🥇", earned: false },
    { name: "Hero Status", icon: "🦸", earned: false },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Save user info logic here
    alert("Profile updated successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Profile</h1>
          <p className="text-lg text-gray-600">Manage your donor information and track your impact</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                <button
                  onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium">{userInfo.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                  {isEditing ? (
                    <select
                      name="bloodGroup"
                      value={userInfo.bloodGroup}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  ) : (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {userInfo.bloodGroup}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userInfo.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userInfo.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={userInfo.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userInfo.location}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={userInfo.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userInfo.emergencyContact}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Donation History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Donation History</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Location</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Points</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donationHistory.map((donation) => (
                      <tr key={donation.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">{donation.date}</td>
                        <td className="py-3 px-4 text-gray-900">{donation.type}</td>
                        <td className="py-3 px-4 text-gray-600">{donation.location}</td>
                        <td className="py-3 px-4">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                            +{donation.points}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                            {donation.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-500">{stats.totalDonations}</div>
                  <div className="text-sm text-gray-600">Total Donations</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600">{stats.pointsEarned}</div>
                  <div className="text-sm text-gray-600">Points Earned</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-500">{stats.livesImpacted}</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
              </div>
            </div>

            {/* Donor Rank */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Donor Rank</h3>
              <div className="text-2xl font-bold">{stats.rank}</div>
              <p className="text-yellow-100 text-sm mt-2">Keep donating to reach Platinum status!</p>
            </div>

            {/* Next Donation */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Next Donation</h3>
              <p className="text-blue-700 text-sm mb-3">You can donate again on:</p>
              <p className="text-lg font-semibold text-blue-800">{stats.nextEligibleDate}</p>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-center ${
                      achievement.earned
                        ? "bg-green-50 border border-green-200"
                        : "bg-gray-50 border border-gray-200 opacity-50"
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-medium text-gray-700">{achievement.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition-colors">
                  Schedule Donation
                </button>
                <button className="w-full border border-red-500 text-red-500 hover:bg-red-50 py-2 rounded-lg font-medium transition-colors">
                  Find Blood Banks
                </button>
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 rounded-lg font-medium transition-colors">
                  Download Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
