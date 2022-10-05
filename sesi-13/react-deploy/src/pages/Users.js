import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      <div className="mt-4 p-5 mb-4 bg-light rounded-3 border">
        <Link
          to="/"
          className="btn btn-warning btn-lg"
          type="button"
          role="button"
        >
          Back to Home
        </Link>
        <div className="container-fluid py-5">
          <table className="table table-light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
