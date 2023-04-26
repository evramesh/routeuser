import {Switch, Route} from 'react-router-dom'
import Protected from './components/ProtectedRoute'
import Log from './components/Word'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Protected exact path="/" component={Home} />
      <Protected exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
