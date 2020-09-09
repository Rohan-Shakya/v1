import React from 'react';
import './Global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/pages/about/About';
import { Landing } from './components/Landing';
import { Passion } from './components/pages/passion/Passion';
import { Experience } from './components/pages/experience/Experience';
import { Contact } from './components/pages/contact/Contact';
import { Home } from './components/pages/home/Home';
import { Work } from './components/pages/work/Work';

function Routing() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/home' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/passion' exact component={Passion} />
          <Route path='/experience' exact component={Experience} />
          <Route path='/work' exact component={Work} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default Routing;
