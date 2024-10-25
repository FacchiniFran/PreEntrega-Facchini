import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import CategoryButton from './CategoryButton.jsx';


export default function NavBar() {

  return (
    <>
      <header>
        <a className='logo'><Link to='/'><img src='../../images/logoMG.png' alt='Logo Image' /></Link></a>
        <img className='title' src='../../images/manaGamersTitle.png' alt='Mana Gamers Title' />
        <CartWidget />
        <nav className='menu'>
          <Link to='/categorias/consolas'><CategoryButton category='Consolas' /></Link>
          <Link to='/categorias/juegos'><CategoryButton category='Juegos' /></Link>
          <Link to='/categorias/componentes'><CategoryButton category='Componentes de PC' /></Link>
          <Link to='/categorias/accesorios'><CategoryButton category='Accesorios' /></Link>
          <Link to='/acercaDe'><CategoryButton category='Sobre Nosotros' /></Link>
        </nav>
      </header>
    </>
  )
}
