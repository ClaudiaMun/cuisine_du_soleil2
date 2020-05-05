import React from 'react'
import './FeaturesSpace.css';
import { Link } from 'react-router-dom'

function FeaturesSpace(props){
  const { name, image, recipe } = props
  return (
    <div className="FeaturesSpace">

          <img src={`${process.env.PUBLIC_URL}images2/${image}`} width="200px" height="200px" alt="Hello" />
          <h1>{name}</h1>
          <div>{recipe}</div>
       </div>
      )
    }



export default FeaturesSpace
