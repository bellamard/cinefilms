import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Movie" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
