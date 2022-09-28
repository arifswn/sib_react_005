import { useLocation, useNavigate } from "react-router-dom"

import React from "react"

const Login = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  const handleLogin = () => {
    localStorage.setItem("token", "login")
    navigate(from, { replace: true })
  }
  return (
    <div>
      <h1>Login Page</h1>
      <p>Klik the button</p>
      <button className="login-button" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  )
}

export default Login
