import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/'> {/* depends on the route provided */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
