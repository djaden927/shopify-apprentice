
import React, { useState } from 'react';
import styled from 'styled-components'

const DateHolder = styled.div
  `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 7;
  height: 90vh;
`

const DateBox = styled.div
  `
  display: flex;
  justify-content: center;
  width: 70%;
  flex-wrap: wrap;
  z-index: 6;
  background-color: white;
  margin: 1.5%;
`

const Photo = styled.img
  `
  width: 75%;
  height: auto;
  margin-top: 1%;
`

const Explanation = styled.p
  `
  margin: 1%;
  border: 2px solid #000000;
  background-color: #979797;
  padding: .5%;
  line-height: 1.5;
`

const Like = styled.div
`
  margin .5% 20%;
  width: 20%;
`

const Next = styled.button
  `
height: 4em;
width: 20%;
padding: 1.5em auto;
margin: 1em auto;
background-color: #32CD30;
border: none;
border-radius: 3px;
text-transform: uppercase;
letter-spacing: 0.5em;
transition: all 0.2s cubic-bezier(.4,0,.2,1);
color: white;

&:hover{
  letter-spacing: 0.8em;
  background-color: #76B947;
}
`

function ImageCard(props) {
  const { images } = props
  const [active, setActive] = useState("hidden")
  const [count, setCount] = useState(0)
  

  let likeActive = ""
  

  const likeClick = (evt) => {
    if(active === "hidden"){
      setActive('')
      likeActive = "like-active";
    }else {
      setActive('hidden')
      likeActive = "";
    }
  }

  const nextPhoto = () => {
    setActive('hidden')
    likeActive = "";
    setCount(count + 1)
    console.log(count)
  }

  return (
    <DateHolder className='hero'>

          <DateBox>
            <Photo src={images[count].hdurl} alt={images[count].title} />
            <Like onClick={likeClick} className='like'>
              <button className={`${likeActive} like-toggle basic2`} > ♥</button>
              <span className={active}>I like this</span>
            </Like>
            <h1>{images[count].title} taken on {images[count].date}</h1>
            <Explanation>{images[count].explanation}</Explanation>
            <Next className="nextPhoto" onClick={nextPhoto}>Next Photo</Next>
          </DateBox>
          
    </DateHolder>
  );
}

export default ImageCard;