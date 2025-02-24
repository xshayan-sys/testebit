import React from 'react';
import recipes from '../Cards/CardsData/Data';
import "../Latest Recepies/RecipeCards.css"
export default function RecipeCards() {
    const usedCardIds = [25, 26, 27, 28];
    return (
        <div className='recipes'>
            <h1 className='recipe-h1'>Latest Recipes</h1>
            <div className="recipes-content">
                {recipes
                    .filter((recipe) => !usedCardIds.includes(recipe.id))
                    .map((recipe) => (
                        <div key={recipe.id} className="recipe-card">
                            <img src={recipe.img} alt={recipe.name} />
                            <h3>{recipe.name}</h3>
                        </div>
                    ))}
            </div>
            <div className="recipes-button">
                <button className='btn-recipes'>Load More</button>
            </div>
        </div>
    );
}