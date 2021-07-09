import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NewsView from './components/NewsView.component';
import ArchivedNews from "./components/ArchivedNews.component";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="navBar">
        <Navbar.Brand>
          <img
            alt=""
            src="https://react-bootstrap.github.io/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="link btn" to="/news">News</Link>
          <Link className="link btn" to="/archived">Archived</Link>
        </Nav>
      </Navbar>
      <Redirect to="/news" />
      <Switch>
        <Route path="/news" component={NewsView} />
        <Route path="/archived" component={ArchivedNews} />
      </Switch>
    </Router>
  );
}

export default App;
