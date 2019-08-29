import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/demo1">1.hooks初体验</Link>

        <Link to="/demo2">2.Effect Hook</Link>
        <Route path="/demo1" component={Demo1}></Route>
        <Route path="/demo2" component={Demo2}></Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
