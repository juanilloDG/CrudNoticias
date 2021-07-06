import {Route, BrowserRouter as Router, Switch, Link, Redirect} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NewsView from './components/NewsView.component';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link className="btn" to="/news">News</Link>
          </li>
        </ul>
      </nav>
      <Redirect to="/news" />
      <Switch>
        <Route path="/news" component={NewsView} />
      </Switch>
    </Router>
  );
}

export default App;
