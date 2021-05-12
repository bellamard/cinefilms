import axios from 'axios'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Research from './pages/Research';
import { fetchResearch } from './services/myservices';


function App() {
  const [search, setSearch] = useState('');
 

  const research = (e) => {
    setSearch(e);
    
  };
 
  return (
    <div className="App">
      <Router>

        <Navbar researchMovie={research} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Movie" component={MovieDetail} />
          <Route path="/Research/:search" component={Research} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
