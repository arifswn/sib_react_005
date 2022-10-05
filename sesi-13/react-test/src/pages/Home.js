import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="mt-4 p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Why do we need Test ?</h1>
          <p className="col-md-12 fs-4">
            To guarantee our code quality. And to show the people that we also
            care about it and wish to give something that already proven, at
            least by ourselft.
          </p>
          <Link
            to="/users"
            className="btn btn-success btn-lg"
            type="button"
            role="button"
          >
            Users List
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
