import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Users from "./pages/Users"

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
