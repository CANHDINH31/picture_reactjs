import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import General from './components/General';
import Introduce from './components/Introduce';
import Address from './components/Address'
import GoToTop from './components/GoToTop'
import Contact from './components/Contact';
import ListDetail from './components/ListDetail';
import DetailPicture from './components/DetailPicture';
import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Viewer from './components/Viewer';

function App() {
  const [goToTop, setGoToTop] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setGoToTop(true)
      } else {
        setGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/general/:params">
            <General />
          </Route>
          <Route path="/detailinfo/:id">
            <DetailPicture />
          </Route>
          <Route path="/detail/:params">
            <ListDetail />
          </Route>
          <Route path="/introduce">
            <Introduce />
          </Route>
          <Route path="/address">
            <Address />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {goToTop && <GoToTop onClick={scrollToTop} />}
      <Contact />
    </div>
  );
}

export default App;
