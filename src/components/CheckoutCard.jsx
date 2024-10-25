import './CheckoutCard.css';
import BuyButtons from './BuyButtons';
import { NavLink } from 'react-router-dom';

export default function CheckoutCard({ product }) {

    return (
        <>
            <article className='checkCard'>
                <NavLink to={`/producto/${product.id}`}>
                    <h4 className='checkTitle'>{product.title}</h4>
                    <img className='checkImage' src={product.image} alt={product.title} />
                </NavLink>
                <p className='checkQuantity'>{product.quantity}</p>
                <p className='checkPrice'>$ {product.price}</p>
                <BuyButtons key={product.id} product={product}></BuyButtons>
            </article>
        </>
    )
}