import { useLocation, Navigate } from "react-router-dom"

import React from "react"

const ProtectedRoute = ({ children }) => {
  let location = useLocation()

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute
