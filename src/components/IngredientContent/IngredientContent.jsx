import './IngredientContent.css'

const IngredientContent = ({ ingredient }) => {
  return (
    <section className='content'>
      {console.log(ingredient)}
      <h3>{ingredient?.name}</h3>
      <ul className='content-list'>
        {ingredient?.results.map((typeInfo) => (
          <li
            key={typeInfo.id ? typeInfo.id : typeInfo.name}
            className='content-card'
          >
            <div id='img-styles'>
              <img src={typeInfo.image} alt={typeInfo.name} />
            </div>
            <a href={typeInfo.link}>{typeInfo.name}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default IngredientContent
