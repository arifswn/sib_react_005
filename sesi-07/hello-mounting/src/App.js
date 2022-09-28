import Clock from "./components/Clock"
import ErrorBoundary from "./components/ErrorBoundary"
import HaluClass from "./components/HaluClass"
import TodoFunction from "./components/TodoFunction"

function App() {
  return (
    <>
      <div className="App">
        <Clock />
        <hr />

        <HaluClass />
        <hr />
      
        <ErrorBoundary>          
          <TodoFunction />
        </ErrorBoundary>
      </div>
    </>
  )
}

export default App
