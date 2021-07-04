import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About"
import Home from "./components/Home/Home"
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul style={{listStyle:'none'}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="home2">Home2</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/home2">
            <Home></Home>
          </Route>
          <Route path="/post/:keyId">
            <PostDetails></PostDetails>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
