import './RecipeCard.css'

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe-card'>
      <div className='img-recipe'>
        <img src={recipe.image} alt={recipe.title} key={recipe.id} />
      </div>
      <h2 key={recipe.id}>{recipe.title}</h2>
    </div>
  )
}

export default RecipeCard
