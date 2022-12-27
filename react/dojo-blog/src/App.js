import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch> {/* should surrond the routes */}
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'> {/* note that /create/m will lead to the same result without exact */}
            <Create />
          </Route>
          <Route path='/blogs/:id'> {/* the name we use after : is the param in query */}
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
