import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login, Register, Main, CreateRedux } from "../../pages"

const RoutesConf = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/redux" element={<CreateRedux />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default RoutesConf
