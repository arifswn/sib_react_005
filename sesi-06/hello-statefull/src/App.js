import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import Users from "./components/Users"
import Counter from "./components/Counter"

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Users />
      <Header />
      <hr />
      <Content />
      <hr />
      <Footer />
      <hr />
      <Counter initialCount={1} />
    </div>
  )
}

export default App
