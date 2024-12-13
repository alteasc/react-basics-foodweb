import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Recipes from './pages/Recipes/Recipes'
import Ingredients from './pages/Ingredients/Ingredients'
import Recipe from './pages/Recipe/Recipe'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Recipes />} />
        <Route path='/ingredients' element={<Ingredients />} />
        <Route path='recipe/:id' element={<Recipe />} />
      </Routes>
    </>
  )
}

export default App
