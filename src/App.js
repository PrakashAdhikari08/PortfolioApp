import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/footer/footer';
import Home from './components/body/homepage/home';
import './index.css'

function App() {
  return (
    <div className="App container-fluid app-container">
      <Router>

      <Header/>
      <Home/>
      <Footer/>
      

      </Router>
     
    
    </div>
  );
}

export default App;
