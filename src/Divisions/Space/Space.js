import React from 'react'
import './Space.css';

function Space(props) {
  const { name, image } = props
  return (
    <div className= "Space">
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="200px" height="200px" alt="Hello" />
      <h1>{name}</h1>
   </div>
  )
}

export default Space
