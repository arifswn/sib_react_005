//import react router dom
import { Switch, Route } from "react-router-dom"
//import component Navigation
import Navigation from "./pages/templates/NavTop"
import Footer from "./pages/templates/NavBottom"
//import component Home
import Home from "./pages/Home"
//import component About
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <Navigation />  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
