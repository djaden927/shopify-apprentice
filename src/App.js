
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageCard from "./components/imageCards.js"

function App() {
  const [images, setImages] = useState([])

  const apikey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=10`)
      .then((res) => {
        setImages(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [apikey])

  console.log(images)
  return (
    <div className="App">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds">
      {images.length > 0 && <ImageCard images={images}/>}
      </div>
      

    </div>
  );
}

export default App;
