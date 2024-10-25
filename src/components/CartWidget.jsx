import './CartWidget.css';
import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
    
    const [cart] = useContext(CartContext);

    const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);

    return (
        <>
            <NavLink className='cart' id='cart' to={`/checkout`}>{totalQuantity} 🛒</NavLink>
        </>
    )
}