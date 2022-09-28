import CounterClass from "./features/counter/CounterClassComponent"
import CounterFn from "./features/counter/CounterFnComponent"
import UsersList from "./features/users/UsersList"

const App = () => {
  return (
    <div className="App container">
      <CounterFn />
      <CounterClass />
      <UsersList />
    </div>
  )
}

export default App
