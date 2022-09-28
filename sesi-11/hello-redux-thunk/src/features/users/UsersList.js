import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./usersSlice"

import React from "react"

const UsersList = () => {
  const allUsers = useSelector((state) => state.users.entities)
  const dispatch = useDispatch()

  const doFetchUsers = () => {
    dispatch(fetchUsers())
  }

  return (
    <div className="container">
      <h1>Users data</h1>
      <button className="btn btn-primary" onClick={doFetchUsers}>
        Get Users
      </button>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
