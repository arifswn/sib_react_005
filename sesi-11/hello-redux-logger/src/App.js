import CounterClass from "./features/counter/CounterClassComponent"
import CounterFn from "./features/counter/CounterFnComponent"

const App = () => {
  return (
    <div className="App">
      <CounterFn />
      <CounterClass />
    </div>
  )
}

export default App
