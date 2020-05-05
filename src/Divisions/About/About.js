import './About.css';
import React from 'react'

function About() {
  return (
  <body>


    <div className="About">
      <div>
        <img class= "pie" src={require('../App/pie.gif')} alt="loading..." height='100px' width='100px'/>
      </div>
         <h1> About us! </h1>
         <p> Cuisine du Soleil or "Kitchen of the Sun" is a cooking website that teaches beginners how to cook their own food!
         There are so many recipes to explore, so we look forward to teaching! Thank you for visiting and make sure to suggest any recipes you would like to try out.</p>
    </div>
    </body>
  )
}

export default About
