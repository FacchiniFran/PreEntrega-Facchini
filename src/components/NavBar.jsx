import './NavBar.css';
import CartWidget from './CartWidget.jsx';
import { NavLink } from 'react-router-dom';
import CategoryButton from './CategoryButton.jsx';


export default function NavBar() {

  return (
    <>
      <header>
        <NavLink to='/' className='logo'><img src='../../images/logoMG.png' alt='Logo Image' /></NavLink>
        <img className='title' src='../../images/manaGamersTitle.png' alt='Mana Gamers Title' />
        <CartWidget />
        <nav className='menu'>
          <NavLink to='/categorias/consolas'><CategoryButton category='Consolas' /></NavLink>
          <NavLink to='/categorias/juegos'><CategoryButton category='Juegos' /></NavLink>
          <NavLink to='/categorias/componentes'><CategoryButton category='Componentes de PC' /></NavLink>
          <NavLink to='/categorias/accesorios'><CategoryButton category='Accesorios' /></NavLink>
          <NavLink to='/acercaDe'><CategoryButton category='Sobre Nosotros' /></NavLink>
        </nav>
      </header>
    </>
  )
}
