import { useEffect, useState } from 'react'
import './Recipes.css'
import { Link } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  //const apiKey = process.env.apiKey

  useEffect(() => {
    fetch(
      'https://api.spoonacular.com/recipes/random?apiKey=dc9216d48b994f7b8ad283f28a458174&number=6'
    )
      .then((res) => res.json())
      .then((res) => {
        setRecipes(res.recipes)
      })
  }, [])

  return (
    <main id='recipes'>
      {console.log(recipes)}
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className='recipe_link'
        >
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </main>
  )
}

export default Recipes
