import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <div className='App'>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn} />
          </div>
        </Switch>
      </Router>
    </div>
  )
}

export default App
