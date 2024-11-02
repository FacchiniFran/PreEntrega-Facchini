import './CheckoutCard.css';
import BuyButtons from './BuyButtons';
import { NavLink } from 'react-router-dom';

export default function CheckoutCard({ product }) {

    return (
        <>
            <article className='checkCard'>
                <h3 className='checkTitle'><NavLink className='checkLink' to={`/producto/${product.id}`}>{product.title}</NavLink></h3>
                <NavLink className='checkImageLink' to={`/producto/${product.id}`}>
                    <img className='checkImage' src={product.image} alt={product.title} />
                </NavLink>
                <div className='priceContainer'>
                    <p className='checkPrice'>$ {product.price}</p>
                    <p className='checkQuantity'>Cantidad: {product.quantity}</p>
                </div>
                <BuyButtons key={product.id} product={product}></BuyButtons>
            </article>
        </>
    )
}