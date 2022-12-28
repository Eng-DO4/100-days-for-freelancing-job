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
        <Switch> {/* should surrond the routes */}
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/create'> {/* note that /create/m will lead to the same result without exact */}
            <Create />
          </Route>
          <Route exact path='/blogs/:id'> {/* the name we use after : is the param in query */}
            <BlogDetails />
          </Route>
          <Route path='*'> {/* in the last as if the prev didn't match */}
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
