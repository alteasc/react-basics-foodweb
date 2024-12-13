import { useEffect, useState } from 'react'
import './Ingredients.css'
import IngredientContent from '../../components/IngredientContent/IngredientContent'

const Ingredients = () => {
  const [ingredientSelected, setIngredientSelected] = useState()
  const [search, setSearch] = useState(false)
  const [ingredientContent, setIngredientContent] = useState([])

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/food/search?apiKey=dc9216d48b994f7b8ad283f28a458174&query=${ingredientSelected}&number=3`
    )
      .then((res) => res.json())
      .then((res) => {
        setIngredientContent(res.searchResults)
        setSearch(false)
      })
  }, [search])

  return (
    <main className='ingredient-info'>
      <h2>Search info about your favorite ingredient</h2>
      {console.log(ingredientContent)}
      <div className='search'>
        <input
          type='text'
          placeholder='Introduce here your ingredient'
          onChange={(e) => setIngredientSelected(e.target.value)}
        />
        <button type='submit' onClick={() => setSearch(true)}>
          Search
        </button>
      </div>
      <div className='search-examples'>
        <h3>Examples of ingredients you can looking for:</h3>
        <ul>
          <li>Avocado</li>
          <li>Lemon</li>
          <li>Meat</li>
          <li>Apple</li>
        </ul>
      </div>
      <div className='ingredient-content'>
        {ingredientContent && (
          <>
            <IngredientContent ingredient={ingredientContent[0]} />
            <IngredientContent ingredient={ingredientContent[4]} />
            <IngredientContent ingredient={ingredientContent[3]} />
          </>
        )}
      </div>
    </main>
  )
}

export default Ingredients
