import './BuyButtons.css';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function BuyButtons({ product }) {

    const [cart, , addItem, removeItem] = useContext(CartContext);

    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleClickAdd = () => {
        addItem(product);
    }

    const handleClickRemove = () => {
        removeItem(product.id);
    }

    return (

        <>
            <section className='buttonsContainer'>
                <button className='handleButton' onClick={handleClickRemove}>-</button>
                <p className='quantity'>{quantity}</p>
                <button className='handleButton' onClick={handleClickAdd}>+</button>
            </section>
        </>
    )
}