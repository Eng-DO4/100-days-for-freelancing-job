import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './Error404NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/blogs/:id'>
            <BlogDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
