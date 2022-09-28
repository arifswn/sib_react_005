//import react router dom
import { Route, Redirect, Switch } from "react-router-dom"
//Cek NotFoun
import NotFound from "./components/utils/NotFound/NotFound"
//Layout
import Layout from "./components/layout/Layout"
//Pages
import Home from "./pages/home/Home"
import MeetUp from "./pages/meetup/MeetUp"
import Explore from "./pages/explore/Explore"
import Login from "./pages/login/Login"
//Auth
import useAuth from "./components/auth/Auth"

const App = () => {
  const { auth, setAuth } = useAuth()

  if (!auth) {
    return <Login setAuth={setAuth} />
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Layout children={Home} />
        </Route>
        <Route exact path="/create-meetup">
          <Layout children={MeetUp} />
        </Route>
        <Route exact path="/explore">
          <Layout children={Explore} />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="*" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

export default App
