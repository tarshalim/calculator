import { useState, useEffect } from 'react'
import './App.css'


const App = () => {

  useEffect((counter, setCounter) => {
    searchMovies('Spiderman');
  },[]);

  return (
 <div>
  <h1> My Website</h1>
 </div>
  );
}

export default App
