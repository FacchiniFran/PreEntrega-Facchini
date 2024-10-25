import './ProductCard.css';
import BuyButtons from './BuyButtons';
import { NavLink } from 'react-router-dom';

export default function ProductCard({ product }) {

  return (
    <>
      <article className='prodCard'>
        <h4 className='prodTitle'>{product.title}</h4>
        <img className='prodImage' src={product.image} alt={product.title} />
        <p className='price'>$ {product.price}</p>
        <p className='shortDesc'>{product.shortDesc}</p>
        <button className='detButton'>
          <NavLink className='detButton' to={`/producto/${product.id}`}>Detalles</NavLink>
        </button>
        <BuyButtons key={product.id} product={product}></BuyButtons>
      </article>
    </>
  );
}