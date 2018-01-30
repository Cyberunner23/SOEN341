import React, { Component } from 'react'
import './App.css'

import LandingPage from './JS/LandingPage'
import SignUp from './JS/SignUp'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div style={main}>
          <div style={{width: 150, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <a style={q}>Queue</a> <a style={a}>Ennaye</a>
          </div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/sign-up" component={SignUp}/>
        </div>
      </Router>
    );
  }
}

export default App;

const bgurl="http://www.hostcompanion.com/images/bg-page.jpg"
const main = {
  display: 'flex',
  height: 900,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${bgurl})`,
  backgroundSize: 'cover'
}


const q = {
  fontSize: 30,
  fontFamily: 'Impact',
  color: '#ff0066'

}
const a = {
  fontSize: 20,
  fontFamily: 'Comic Sans MS',
  color: '#321a7b'

}