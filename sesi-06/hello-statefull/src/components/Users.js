import React from "react"
import Movie from "./Movie"

export class Users extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "user01",
    }
  }

  render() {
    const movie = {
      title: "Avenger",
      year: "2018",
      rating: "10",
      synopsis: "Action",
    }
    return (
      <>
        <h3>Statefull Component</h3>
        <h3>{this.state.username}</h3>
        <hr />
        <Movie movie={movie} />
        <hr />
      </>
    )
  }
}

export default Users
