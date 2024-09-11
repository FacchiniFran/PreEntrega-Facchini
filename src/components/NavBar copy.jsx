import './NavBar.css'
import CategoryButton from './CategoryButton.jsx'

function NavBar() {

  return (
    <>
      <header>
        <a className='logo' href='./index.html'><img src='../images/logoMG.png' alt='Logo Image' /></a>
        <img className='title' src='../images/manaGamersTitle.png' alt='Mana Gamers Title' />
        <div className='login' id='login'>
          <p id='loginTxt'>Ingresá</p>
        </div>
        <nav className='menu'>
          <CategoryButton category = 'Consolas' />
          <CategoryButton category = 'Juegos' />
          <CategoryButton category = 'Componentes de PC' />
          <CategoryButton category = 'Accesorios' />
          <CategoryButton category = 'Sobre Nosotros' />
        </nav>
      </header>
    </>
  )
}

export default NavBar
