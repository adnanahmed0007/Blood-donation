"use client"

import { useState } from "react"

function Search() {
  const [searchLocation, setSearchLocation] = useState("")
  const [searchBloodGroup, setSearchBloodGroup] = useState("")

  // Mock donor data
  const donors = [
    {
      id: 1,
      name: "John Smith",
      bloodGroup: "O+",
      distance: "2.3 km",
      points: 150,
      lastDonation: "2 months ago",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      bloodGroup: "A+",
      distance: "3.1 km",
      points: 280,
      lastDonation: "1 month ago",
    },
    {
      id: 3,
      name: "Mike Davis",
      bloodGroup: "B+",
      distance: "4.5 km",
      points: 420,
      lastDonation: "3 weeks ago",
    },
    {
      id: 4,
      name: "Emily Wilson",
      bloodGroup: "AB+",
      distance: "1.8 km",
      points: 320,
      lastDonation: "1 month ago",
    },
    {
      id: 5,
      name: "David Brown",
      bloodGroup: "O-",
      distance: "5.2 km",
      points: 180,
      lastDonation: "6 weeks ago",
    },
    {
      id: 6,
      name: "Lisa Garcia",
      bloodGroup: "A-",
      distance: "3.7 km",
      points: 240,
      lastDonation: "2 months ago",
    },
  ]

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

  const filteredDonors = donors.filter((donor) => {
    const matchesBloodGroup = !searchBloodGroup || donor.bloodGroup === searchBloodGroup
    const matchesLocation = !searchLocation || donor.name.toLowerCase().includes(searchLocation.toLowerCase())
    return matchesBloodGroup && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Blood Donors</h1>
          <p className="text-lg text-gray-600">Connect with donors in your area</p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter city or area"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
              <select
                value={searchBloodGroup}
                onChange={(e) => setSearchBloodGroup(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">All Blood Groups</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-red-500">{filteredDonors.length}</span> donors
          </p>
        </div>

        {/* Donor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.map((donor) => (
            <div key={donor.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              {/* Donor Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-600">
                      {donor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{donor.name}</h3>
                    <p className="text-sm text-gray-500">Last donation: {donor.lastDonation}</p>
                  </div>
                </div>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {donor.bloodGroup}
                </span>
              </div>

              {/* Donor Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Distance:</span>
                  <span className="font-medium">{donor.distance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Points:</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                    {donor.points} pts
                  </span>
                </div>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition-colors">
                Contact Donor
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDonors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No donors found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Emergency Banner */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">Emergency Blood Needed?</h3>
              <p className="text-red-700">
                Call our 24/7 emergency hotline: <span className="font-semibold">911</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search