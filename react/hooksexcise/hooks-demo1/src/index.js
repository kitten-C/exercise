import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'
import Demo3 from './components/Demo3'

// const Demos = require.context('./components', false, ' .js$/')
// console.log(Demos)
console.log(require)
class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/demo1">1.hooks初体验</Link>

        <Link to="/demo2">2.Effect Hook</Link>
        <Link to="/demo3">3.使用useReducer</Link>
        <Route path="/demo1" component={Demo1}></Route>
        <Route path="/demo2" component={Demo2}></Route>
        <Route path="/demo3" component={Demo3}></Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
