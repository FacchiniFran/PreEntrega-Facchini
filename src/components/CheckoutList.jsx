import './CheckoutList.css';
import { useContext } from 'react';
import CheckoutCard from './CheckoutCard';
import { CartContext } from '../context/CartContext';


export default function CheckoutList() {

    const [cart, , , , , clearCart] = useContext(CartContext);

    return (
        <>
            <section className='checkout'>
                <h1>Carrito de compras</h1>
                {<div className='listContainer'>
                    {cart.map((product) => (
                        <CheckoutCard key={product.id} product={product}></CheckoutCard>
                    ))}
                </div>}
            </section>
        </>
    )
}