import { useState } from "react"

const useAuth = () => {
  const getAuth = () => {
    const authString = localStorage.getItem("authenticated")
    const isAuth = JSON.parse(authString)
    return isAuth
  }

  const [auth, setAuth] = useState(getAuth())

  const saveAuth = (isAuth) => {
    localStorage.setItem("authenticated", JSON.stringify(isAuth))
    setAuth(isAuth.authenticated)
  }

  return {
    setAuth: saveAuth,
    auth,
  }
}

export default useAuth
