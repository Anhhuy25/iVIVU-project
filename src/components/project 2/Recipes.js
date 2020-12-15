import React from 'react';
import { useGlobalContext } from './context';

function Recipes() {
  const { recipes } = useGlobalContext();

  return (
    <div>
      {recipes.map((recipe, index) => {
        const { image, label, calories } = recipe.recipe;
        return (
          <div key={index}>
            <h1>{label}</h1>
            <p>Calories: {calories}</p>
            <img src={image} alt="" />
          </div>
        )
      })}
    </div>
  );
}

export default Recipes;