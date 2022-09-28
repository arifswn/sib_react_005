import React from "react"

class HaluClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      users: [],
      isLoading: true,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.users.length !== nextState.users.length) {
      return true
    }

    return false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedState !== this.props.selectedState) {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((resp) => resp.json())
        .then((respJson) => {
          this.setState({
            isLoading: false,
            users: respJson.slice(0, 10),
          })
          console.log("test")
        })
        .catch((err) => console.log(err))
    }
  }

  componentDidMount() {
    // eventData.addEventListener()
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((respJson) => this.setState({ users: respJson.slice(0, 5) }))
      .catch((err) => console.log(err))
  }

  componentWillUnmount() {
    // eventData.removeEventListener()
  }

  render() {
    const postTodo = this.state.users
    return (
      <div>
        <h1>Halu Class</h1>
        <table>
          <tbody>
            {postTodo.map((todo, index) => {
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
}

export default HaluClass
