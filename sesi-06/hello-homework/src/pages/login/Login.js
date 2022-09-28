import { useState } from "react"
import "./Login.css"
import Message from "../../components/utils/Message/Message"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"

function randomNumberInRange(min, max) {
  //  get number between min and max
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//Cek Message Alert
const InfoWrapper = (props) => {
  const { status } = props

  if (status !== null) {
    if (status === false) {
      return <Message title="Alert" type="warning" message="Something wrong" />
    } else {
      return (
        <Message title="Alert" type="success" message="Login successful!" />
      )
    }
  }
  return <></>
}

//array users
const users = [{ username: "user@gmail.com", password: "12345" }]

//element login
const Login = ({ setAuth }) => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [isSuccess, setIsSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const account = users.find((user) => user.username === username)
    if (account && account.password === password) {
      setIsSuccess(true)
      const auth = randomNumberInRange(1, 6)
      setAuth(auth)
    } else {
      setIsSuccess(false)
    }
  }

  const renderForm = (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-form-content">
          <h3 className="auth-form-title">Sign In</h3>
          <InfoWrapper status={isSuccess} />
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              name="uname"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              autoComplete="on"
              name="pass"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )

  const callHome = <Redirect exact from="/login" to="/" />
  return <>{isSuccess ? callHome : renderForm}</>
}

Login.propTypes = {
  setAuth: PropTypes.func,
}

export default Login
