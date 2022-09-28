import React from "react"

const Movie = (props) => {
  return (
    <div>
      <h1>{props.movie.title}</h1>
      <h1>
        {props.movie.year} - {props.movie.rating}
      </h1>
      <h1>{props.movie.synopsis}</h1>
    </div>
  )
}

export default Movie
