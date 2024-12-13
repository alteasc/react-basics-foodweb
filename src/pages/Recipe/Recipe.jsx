import { useEffect, useState } from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  const [recipe, setRecipe] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=dc9216d48b994f7b8ad283f28a458174`
    )
      .then((res) => res.json())
      .then((res) => {
        setRecipe(res)
      })
  }, [])

  return (
    <main id='recipe'>
      {recipe && (
        <>
          <h2>{recipe.title}</h2>
          <div id='recipe-styles'>
            <section className='recipe-details'>
              <img src={recipe.image} alt={recipe.title} />
              <ul id='details'>
                <li id='detail'>Ready in: {recipe.readyInMinutes} minutes</li>
                <li id='detail'>{recipe.servings} servings</li>
              </ul>
            </section>
            <section className='ingredients'>
              <ul className='ingredients-list'>
                <strong>Ingredients:</strong>
                {recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </section>
          </div>
          <section className='instructions'>
            <ul className='instructions-steps'>
              <strong>Instructions:</strong>
              {recipe.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>
                  {step.number}. {step.step}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  )
}

export default Recipe
