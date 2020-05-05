import React from 'react'
import './Footer.css';
import ReactDOM from 'react-dom';




function Footer() {
  return (
    <div className="Footer">
      <footer>
        <h1>Contact us</h1>
        <p>For suggestions and comments leave us a message:</p>
        <p>cuisinedusoleil@gmail.com</p>
        <h3>
          <img src={require('../App/copyright.png')} alt="..." height="40" width="40"/>
          Cuisine du Soleil
        </h3>
      </footer>
    </div>


  )
}




export default Footer
