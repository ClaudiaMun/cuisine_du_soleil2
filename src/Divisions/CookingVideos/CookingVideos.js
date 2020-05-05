import './CookingVideos.css';
import React from 'react'


function CookingVideos() {
  return (
    <div className="Cooking">


    <h1 className="Check">Check out these videos!</h1>
    <div className="CookingVideos">
    <h2>Breakfast:</h2>
        <h3>Fluffy Pancakes & Omelet</h3>
        <iframe class="frame-border" width="560" height="315" src="https://www.youtube.com/embed/9MJhVk4Z1Zc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="frame-border" width="560" height="315" src="https://www.youtube.com/embed/keM9oFwdEwc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h2>Vegan:</h2>
        <h3>Creamy Pasta & Tofu</h3>
        <iframe class="frame-border1" width="560" height="315" src="https://www.youtube.com/embed/uqL1OVdCKsg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="frame-border1" width="560" height="315" src="https://www.youtube.com/embed/ob2CYmTx9PM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h2>Italian:</h2>
        <h3>Chicken Parmesan & Pesto Pasta</h3>
        <iframe class="frame-border" width="560" height="315" src="https://www.youtube.com/embed/IAbFlWQnlD4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="frame-border" width="560" height="315" src="https://www.youtube.com/embed/HU_CNivkxaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <h2>Seafood:</h2>
        <h3>Ceviche & Salmon</h3>
          <iframe class="frame-border1" width="560" height="315" src="https://www.youtube.com/embed/l-c90vSr-_Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe class="frame-border1" width="560" height="315" src="https://www.youtube.com/embed/NOHEZSVzpT8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <h2>Desserts:</h2>
        <h3>Chocolate Chip Cookies & Red Velvet Cake</h3>
           <iframe class="frame-border" width="560" height="315" src="https://www.youtube.com/embed/uJwekkbGPns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <iframe class="frame-border" width="560" height="315" src="https://www.youtube.com/embed/vGE-RfP6KRE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
  )
}



export default CookingVideos
