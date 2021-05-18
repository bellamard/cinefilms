import axios from 'axios'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Research from './pages/Research';
import { fetchResearch } from './services/myservices';


const App=()=> {
  const [search, setSearch] = useState('');
  const [movieDetail, setMovieDetail]= useState('');
 

  
  
 
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={MovieDetail} />
          <Route path="/Research/:search" component={Research} />
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
