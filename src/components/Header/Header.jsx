import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Recipes</NavLink>
          </li>
          <li>
            <NavLink to='/ingredients'>Ingredients Info</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
