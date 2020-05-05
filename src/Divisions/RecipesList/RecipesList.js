import React from 'react';
import Space from '../Space/Space';
import './RecipesList.css';

function RecipesList() {
  return (
    <body className= "Poplist">

        <div className="popular">
          <h1 className="Trending">These recipes are trending:</h1>
        </div>



        <div className="List">

          <Space
            name="Tacos de Carne Asada"
            image="tacos.jpg"
          />
          <Space
            name="Dumplings"
            image="dumplings.jpg"
          />
          <Space
            name="Salmon with Veggies"
            image="salmon.jpg"
          />
          <Space
            name="Pepperoni Pizza"
            image="pizza.jpg"
          />
        </div>
  </body>

  )
}

export default RecipesList
