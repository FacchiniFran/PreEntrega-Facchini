import './BuyButtons.css';
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function BuyButtons({product}) {

    const [counter, setCounter] = useState(0);
    const [, , addItem, removeItem] = useContext(CartContext);

    const handleClickAdd = () => {
        addItem(product);
        setCounter(counter + 1);
    }

    const handleClickRemove = () => {
        removeItem(product.id);
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            console.log("No se puede quitar productos que no están en el carrito!");
        }
    }

    return (

        <>
            <section className='buttonsContainer'>
                <button className='handleButton' onClick={handleClickRemove}>-</button>
                <p>{counter}</p>
                <button className='handleButton' onClick={handleClickAdd}>+</button>
            </section>
        </>
    )
}