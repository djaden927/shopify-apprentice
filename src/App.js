
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
      .then((res) => {
        setImages(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])
  console.log(images)
  return (
    <div className="App">


    </div>
  );
}

export default App;
