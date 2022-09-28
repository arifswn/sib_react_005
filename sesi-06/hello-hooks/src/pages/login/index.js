import React from "react"
import "./login.scss"
import { LoginBg } from "../../assets"
import { Button, Input, Gap, Link } from "../../components"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const history = useNavigate()
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="background" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>

        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => history("/")} />
        <Gap height={100} />
        <Link
          title="Belum punya akun, silahkan daftar"
          onClick={() => history("/register")}
        />
      </div>
    </div>
  )
}

export default Login
