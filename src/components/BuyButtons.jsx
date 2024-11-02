import './BuyButtons.css';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function BuyButtons({product}) {

    const [cart, , addItem, removeItem] = useContext(CartContext);

    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleClickAdd = () => {
        addItem(product);
    }

    const handleClickRemove = () => {
        if (quantity > 0) {
            removeItem(product.id);
        } else {
            console.log("No se puede quitar productos que no están en el carrito!");
        }
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