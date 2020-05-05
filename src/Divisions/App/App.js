import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import { Button } from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import Features from '../Features/Features';
import CookingVideos from '../CookingVideos/CookingVideos';
import Title from '../Title/Title';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import RecipesList from '../RecipesList/RecipesList';

import './App.css';

    function App() {
      return (
        <Router>

          <div className="App">

              <Navbar />
              <Route exact path='/' render={props =>
                <div>
                    <Title />
                    <RecipesList />
                    <About />
                </div>
                            } />
                <Route path="/Features" component={Features} />
                <Route path="/CookingVideos" render={props =>
                  <div>
                      <CookingVideos />
                      <Contact />
                  </div>
                            } />
                <Footer />






             <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
          </Router>
      );
    }

    export default App;
