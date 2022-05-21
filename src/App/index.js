import React from 'react';
//import logo from '../logo.svg';
import CarouselComp from '../Carousel/index';
import Header from '../Header/index';
import About from '../About/index';
import ContactForm from '../Contact/index';
import Footer from '../Footer/index';
import './App.scss';
//import Avatar from '../Logos/my_image.png';
//import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return <div className='App'>
     <Router>
     <Header/>
     <div className="main-container">
      <Switch>
          <Route exact path="/"> 
            <CarouselComp/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/hello">
            <ContactForm/>
          </Route>
          <Redirect from='*' to='/'/>
        </Switch>
      </div>
      <Footer/>
    </Router>
  </div>
}

export default App;
