 import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Donate from "./Donate"
import Signup from "./Signup"
import Login from "./Login"
import SearchBlood from "./SearchbLood"
import Header from "./Header"
import Verify from "./Verify"
import SearchValue from "./Searchvalue"

const App = () => {
  return (
    <Router>
      {/* Header will be visible on all pages */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchBlood />} />
        <Route path="/verifyotp" element={<Verify />} />
        <Route path="/results" element={<SearchValue />} />

      </Routes>
    </Router>
  )
}

export default App

