import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from "./Checkout";
import {BrowserRouter as Router,Switch ,Route} from "react-router-dom";


// import Home from './Home'
function App() {   //functional component 1)class component 
  return (           //JSX MEANS WE ARE USING JAVASCRIPT+XML XML MEANS HTML
    //BEM:-BLOCK ELEMENT AND MODIFIER THIS IS USE TO HAVE CSS IN NEAT WAY/ 
 <Router>
 <div className="app">   
    <Switch>

       <Route path="/checkout">
         <Header />
         <Checkout />
       </Route>


       <Route path="/">
          <Header />
          <Home />
        </Route>
       
    </Switch>
     
  </div>
  </Router>
   
  );
}

export default App;