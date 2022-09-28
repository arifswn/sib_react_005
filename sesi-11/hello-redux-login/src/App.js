import CounterClass from "./features/counter/CounterClassComponent"
import CounterFn from "./features/counter/CounterFnComponent"
import UsersList from "./features/users/UsersList"
import AuthLoginForm from "./features/auth/AuthLoginForm"

const App = () => {
  return (
    <div className="App container">
      <CounterFn />
      <CounterClass />
      <UsersList />
      <AuthLoginForm />
    </div>
  )
}

export default App
