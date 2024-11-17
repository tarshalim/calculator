import { useState, useEffect } from 'react'
import './App.css'
import log from './images/log.png';
import background from './images/background.png';
import sound from './music/sound.mp3';


const App = () => {
  function play() {
    new Audio(sound).play();
  }
  const [counter, setCounter] = useState(0);
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    setCounter(0);
    play()
  },[]);

  const handleCounterChange = (increment) => {
    if (increment > 0) {
      setCounter((prevCount) => prevCount + increment);
      // add log
      setImages((prevImages) => [...prevImages, log]);
    } else {
      setCounter((prevCount) => prevCount + increment);
      // remove log
      setImages((prevImages) => prevImages.slice(0, -1));
    }


  };

  return (
 <div className="background-container">
  <h1> Cross the River</h1>
  <button onClick={() => handleCounterChange(-1)}>-</button>
    <h1>{counter}</h1>
  <button onClick={() => handleCounterChange(1)}>+</button>

  <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '100px'}}>
    {images.map((img, index) => (
      <img key={index} 
      src={img} 
      style={{
        left: `${index * 100}px`,

    }}/>
    ))}
  </div>


 </div>

  );
};

export default App
