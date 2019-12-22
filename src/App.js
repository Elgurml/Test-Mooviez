import React from 'react';
import './App.css';
import Header from './components/screen/Header';
import Footer from './components/screen/Footer';
import MoviesList from './components/content/MoviesList';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList />
      <Footer />
    </div>
  );
}

export default App;
