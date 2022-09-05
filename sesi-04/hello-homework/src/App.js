//import react router dom
import { Switch, Route } from "react-router-dom"
//import pages
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import MeetUp from "./pages/meetup/MeetUp"
import Explore from "./pages/explore/Explore"
//import navigation
import Navigation from "./components/Navigation"
//import footer
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create-meetup" component={MeetUp} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
