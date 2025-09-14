function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Donate Blood, Save Lives
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Every drop counts. Join our community of heroes and help save lives in your area. Your donation can make
                the difference between life and death.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Find Donors Near You
                </button>
                <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/blood-donation-illustration-with-heart-and-medical.jpg"
                alt="Blood donation illustration"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">10,000+</div>
              <div className="text-gray-600">Lives Saved</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">5,000+</div>
              <div className="text-gray-600">Active Donors</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to save lives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Register</h3>
              <p className="text-gray-600">Sign up and provide your blood type and contact information</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">Find donors near you or get contacted when blood is needed</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
              <p className="text-gray-600">Donate blood and earn points while helping save lives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-red-100 mb-8">Join thousands of heroes who are already saving lives</p>
          <button className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home