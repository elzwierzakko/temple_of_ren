import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "./main";
import Games from "./games";
import Movies from "./movies";  
import Commics from "./commics";
import Books from "./books";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/movies"></Link>
            </li>
            <li>
              <Link to="/games"></Link>
            </li>
            <li>
              <Link to="/commics"></Link>
            </li>
            <li>
              <Link to="/movies"></Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/commics">
            <Commics />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));