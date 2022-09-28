import React, { useEffect, useState } from "react"

function TodoFunction() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((respJson) => {
        setTodos(respJson.slice(0, 5))
      })
      .catch((err) => console.log(err))
  })

  return (
    <div>
      <h1>Todo Function</h1>
      <table>
        <thead></thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TodoFunction
