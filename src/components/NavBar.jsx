import './NavBar.css';
import CartWidget from './CartWidget.jsx';
import { NavLink } from 'react-router-dom';
import CategoryButton from './CategoryButton.jsx';


export default function NavBar() {

  return (
    <>
      <header>
        <NavLink to='/' className='logo'><img src='https://i.ibb.co/C1gqGh7/logoMG.png' alt='Logo Image' /></NavLink>
        <img className='title' src='https://i.ibb.co/Z12j9Gv/mana-Gamers-Title.png' alt='Mana Gamers Title' />
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
