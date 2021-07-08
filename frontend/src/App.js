import {Route, BrowserRouter as Router, Switch, Link, Redirect} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NewsView from './components/NewsView.component';
import ArchivedNews from "./components/ArchivedNews.component";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link className="btn" to="/news">News</Link>
            <Link className="btn" to="/archived">Archived</Link>
          </li>
        </ul>
      </nav>
      <Redirect to="/news" />
      <Switch>
        <Route path="/news" component={NewsView} />
        <Route path="/archived" component={ArchivedNews} />
      </Switch>
    </Router>
  );
}

export default App;
