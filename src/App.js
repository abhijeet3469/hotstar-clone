import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Ad from './components/ad/Ad';
import Latest from './components/latest/Latest';
import Sports from './components/sports/Sports';
import Diwali from './components/diwali/Diwali';
import Movie from './components/movie/Movie';
import Show from './components/shows/Show';
import Special from './components/special/Special';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Ad/>
      <Latest/>
      <Sports/>
      <Diwali/>
      <Movie/>
      <Show/>
      <Special/>
      <Footer/>
      </div>
  );
}

export default App;
